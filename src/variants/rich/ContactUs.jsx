import React, { useState } from 'react';
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  DollarSign,
  Briefcase
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactUs({ preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: preselectedService || 'E-Commerce Storefront',
    budget: '$3,000 - $7,000',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const projectTypes = [
    'E-Commerce Storefront',
    'High-Converting Landing Page',
    'Admin Theme Customizer',
    'Fullstack Web App',
    'UI/UX & Branding',
  ];

  const budgetRanges = [
    '$1,000 - $3,000',
    '$3,000 - $7,000',
    '$7,000 - $15,000',
    '$15,000+',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.message.trim()) newErrors.message = 'Please provide project details';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    // Simulate sending API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger confetti effect
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#D4FF00', '#FFFFFF', '#1E1E1E'],
        });
      } catch (err) {
        console.log('Confetti triggered');
      }
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#D4FF00]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E1E1E] border border-[#2A2A2A] text-xs font-semibold uppercase tracking-wider text-[#D4FF00]">
            <MessageSquare className="w-4 h-4" />
            <span>Start Your Project</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let’s Build Something <br />
            <span className="text-[#D4FF00]">Extraordinary Together.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#7A7A7A] leading-relaxed">
            Ready to elevate your digital presence? Fill out the form below or reach out directly to founders Mark Diez Aballe & Yzelle Lim.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Founders Contact Card */}
            <div className="p-8 rounded-3xl bg-[#1E1E1E] border border-[#2A2A2A] space-y-6 relative overflow-hidden">
              <div className="flex items-center gap-3 pb-4 border-b border-[#2A2A2A]">
                <div className="p-3 rounded-2xl bg-[#D4FF00]/10 text-[#D4FF00]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Direct Founders Access</h3>
                  <p className="text-xs text-[#7A7A7A]">Talk directly with our lead architects</p>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="p-2.5 rounded-xl bg-[#0A0A0A] border border-[#2A2A2A] text-[#D4FF00]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#7A7A7A] uppercase font-semibold">General Inquiry</div>
                    <a href="mailto:webuildwebofficial@gmail.com" className="font-medium hover:text-[#D4FF00] transition-colors">
                      webuildwebofficial@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-300">
                  <div className="p-2.5 rounded-xl bg-[#0A0A0A] border border-[#2A2A2A] text-[#D4FF00]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#7A7A7A] uppercase font-semibold">Co-Founders Direct</div>
                    <div className="text-xs text-[#7A7A7A]">
                      mark@webuildweb.com &bull; yzelle@webuildweb.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-300">
                  <div className="p-2.5 rounded-xl bg-[#0A0A0A] border border-[#2A2A2A] text-[#D4FF00]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#7A7A7A] uppercase font-semibold">Response Time</div>
                    <div className="font-medium text-white">Within 24 Hours</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#2A2A2A] flex items-center justify-between text-xs text-[#7A7A7A]">
                <span>Global Remote Studio</span>
                <span className="text-[#D4FF00] font-semibold">Accepting Projects</span>
              </div>
            </div>

            {/* Quick Guarantees Box */}
            <div className="p-6 rounded-3xl bg-[#141414] border border-[#2A2A2A] space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">What Happens Next?</h4>
              <div className="space-y-2 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" />
                  <span>1. We review your project requirements within 24h.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" />
                  <span>2. We schedule a strategy call & live admin customizer preview.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" />
                  <span>3. You receive a detailed proposal & timeline budget.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#1E1E1E] border border-[#2A2A2A] shadow-2xl relative">
              
              {submitted ? (
                <div className="text-center py-12 space-y-6 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#D4FF00]/20 border-2 border-[#D4FF00] flex items-center justify-center text-[#D4FF00] mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-white">Thank You for Reaching Out!</h3>
                    <p className="text-sm text-[#7A7A7A] max-w-md mx-auto">
                      Mark Diez Aballe and Yzelle Lim have received your project details. We will contact you within 24 hours to schedule our discovery call.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        projectType: 'E-Commerce Storefront',
                        budget: '$3,000 - $7,000',
                        message: '',
                      });
                    }}
                    className="px-6 py-3 rounded-full bg-[#D4FF00] text-[#0A0A0A] text-xs font-bold uppercase tracking-wider hover:bg-[#b8de00] transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-4 py-3.5 rounded-xl bg-[#0A0A0A] border text-sm text-white placeholder-gray-500 focus:outline-none transition-all ${
                          errors.name
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-[#2A2A2A] focus:border-[#D4FF00] focus:ring-1 focus:ring-[#D4FF00]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-3.5 rounded-xl bg-[#0A0A0A] border text-sm text-white placeholder-gray-500 focus:outline-none transition-all ${
                          errors.email
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-[#2A2A2A] focus:border-[#D4FF00] focus:ring-1 focus:ring-[#D4FF00]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Company / Business Name (Optional)
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="e.g. Apex Global Corp"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#0A0A0A] border border-[#2A2A2A] text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4FF00] transition-all"
                    />
                  </div>

                  {/* Project Type Buttons Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-3 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[#D4FF00]" />
                      <span>Select Project Category</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, projectType: type }))}
                          className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                            formData.projectType === type
                              ? 'bg-[#D4FF00] text-[#0A0A0A] font-bold shadow-md'
                              : 'bg-[#0A0A0A] text-gray-400 border border-[#2A2A2A] hover:text-white'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-3 flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-[#D4FF00]" />
                      <span>Estimated Budget Range</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetRanges.map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, budget: range }))}
                          className={`py-2.5 px-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                            formData.budget === range
                              ? 'bg-[#2A2A2A] border-[#D4FF00] text-[#D4FF00]'
                              : 'bg-[#0A0A0A] border-[#2A2A2A] text-gray-400 hover:text-white'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Details Textarea */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Project Goals & Details *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your brand, goals, target audience, or desired admin customization features..."
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#0A0A0A] border text-sm text-white placeholder-gray-500 focus:outline-none transition-all ${
                        errors.message
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-[#2A2A2A] focus:border-[#D4FF00] focus:ring-1 focus:ring-[#D4FF00]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-full bg-[#D4FF00] text-[#0A0A0A] font-extrabold text-sm uppercase tracking-wider hover:bg-[#b8de00] transition-all shadow-xl shadow-[#D4FF00]/20 flex items-center justify-center gap-3 cursor-pointer hover:scale-[1.01]"
                  >
                    {loading ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <span>Send Project Brief</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
