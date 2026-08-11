import React, { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';

function hexToRgb(hex) {
  let c = hex.replace('#', '');
  if (c.length === 3) {
    c = c.split('').map((x) => x + x).join('');
  }
  const num = parseInt(c, 16);
  return [((num >> 16) & 255) / 255, ((num >> 8) & 255) / 255, (num & 255) / 255];
}

const vertexShader = /* glsl */ `
  attribute vec2 position;
  attribute vec2 uv;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;

  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;

  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;

  uniform float uSpeed;
  uniform float uScale;
  uniform float uTurbulence;
  uniform float uFluidity;
  uniform float uRimWidth;
  uniform float uSharpness;
  uniform float uShimmer;
  uniform float uGlow;
  uniform float uOpacity;
  uniform float uMouseStrength;
  uniform float uMouseRadius;

  varying vec2 vUv;

  // 3D Simplex noise
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

  float snoise(vec3 v){
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 = v - i + dot(i, C.xxx) ;
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );
    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
    i = mod(i, 289.0 );
    vec4 p = permute( permute( permute(
               i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
             + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
             + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
    float n_ = 0.142857142857;
    vec3  ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
  }

  void main() {
    vec2 st = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);
    vec2 mouse = (uMouse - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);

    float t = uTime * uSpeed;

    // Mouse magnetic attraction displacement
    float mDist = length(st - mouse);
    float mForce = smoothstep(uMouseRadius, 0.0, mDist) * uMouseStrength;
    vec2 mDir = (st - mouse) * mForce;

    vec3 p = vec3((st + mDir) * uScale, t * 0.4);

    // Ferrofluid organic distortion
    float n1 = snoise(p * uTurbulence);
    float n2 = snoise(p * (uTurbulence * 2.0) + vec3(n1 * uFluidity));
    float fluidVal = sin(n1 * 3.14159 + n2 * 2.0);

    // Rim sharpness & metallic shimmer
    float rim = pow(clamp(1.0 - abs(fluidVal), 0.0, 1.0), uSharpness * 2.0) * uRimWidth * 5.0;
    float shimmer = sin(fluidVal * 10.0 + t * uShimmer) * 0.5 + 0.5;

    // Color gradient mixing
    vec3 baseCol = mix(uColor1, uColor2, fluidVal * 0.5 + 0.5);
    baseCol = mix(baseCol, uColor3, shimmer * 0.4);

    vec3 finalCol = baseCol * (rim + 0.2) * uGlow;
    float finalAlpha = clamp((rim + 0.15) * uOpacity, 0.0, 1.0);

    gl_FragColor = vec4(finalCol, finalAlpha);
  }
`;

export default function Ferrofluid({
  colors = ['#B7E200', '#111111', '#6B6B6B'],
  speed = 0.5,
  scale = 1.6,
  turbulence = 1,
  fluidity = 0.1,
  rimWidth = 0.2,
  sharpness = 2.5,
  shimmer = 1.5,
  glow = 2,
  flowDirection = 'down',
  opacity = 1,
  mouseInteraction = true,
  mouseStrength = 1,
  mouseRadius = 0.35,
  className = '',
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({ alpha: true, dpr: Math.min(window.devicePixelRatio, 2) });
    const gl = renderer.gl;
    container.appendChild(gl.canvas);

    const geometry = new Triangle(gl);

    const c1 = colors[0] || '#B7E200';
    const c2 = colors[1] || '#111111';
    const c3 = colors[2] || '#6B6B6B';

    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: [container.clientWidth, container.clientHeight] },
        uMouse: { value: [container.clientWidth * 0.5, container.clientHeight * 0.5] },
        uColor1: { value: hexToRgb(c1) },
        uColor2: { value: hexToRgb(c2) },
        uColor3: { value: hexToRgb(c3) },
        uSpeed: { value: speed },
        uScale: { value: scale },
        uTurbulence: { value: turbulence },
        uFluidity: { value: fluidity },
        uRimWidth: { value: rimWidth },
        uSharpness: { value: sharpness },
        uShimmer: { value: shimmer },
        uGlow: { value: glow },
        uOpacity: { value: opacity },
        uMouseStrength: { value: mouseInteraction ? mouseStrength : 0 },
        uMouseRadius: { value: mouseRadius },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      program.uniforms.uResolution.value = [w, h];
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const handleMouseMove = (e) => {
      if (!mouseInteraction || !container) return;
      const rect = container.getBoundingClientRect();
      program.uniforms.uMouse.value = [e.clientX - rect.left, rect.height - (e.clientY - rect.top)];
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId;
    const render = (t) => {
      program.uniforms.uTime.value = t * 0.001;
      renderer.render({ scene: mesh });
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (gl.canvas && container.contains(gl.canvas)) {
        container.removeChild(gl.canvas);
      }
    };
  }, [
    colors,
    speed,
    scale,
    turbulence,
    fluidity,
    rimWidth,
    sharpness,
    shimmer,
    glow,
    flowDirection,
    opacity,
    mouseInteraction,
    mouseStrength,
    mouseRadius,
  ]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{ minHeight: '100%' }}
    />
  );
}
