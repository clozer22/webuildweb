import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

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
      newErrors.email = 'Valid email address is required';
    }
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#B7E200', '#000000', '#F2F2F2'],
        });
      } catch (err) {
        console.log('Confetti triggered');
      }
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-white text-[#000000] relative border-t border-[#E5E5E5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimal Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="text-xs font-mono text-[#000000] font-bold uppercase tracking-widest flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B7E200]" />
            <span>+ GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000000] tracking-tight">
            Start A Conversation
          </h2>
          <p className="text-sm text-[#6B6B6B] max-w-md mx-auto">
            Have a project in mind? Send us a message and Mark or Yzelle will get back to you within 24 hours.
          </p>
        </div>

        {/* Pure Minimal Form in Light Theme */}
        <div className="p-8 sm:p-12 rounded-none bg-[#F2F2F2] border border-[#E5E5E5] shadow-md">
          {submitted ? (
            <div className="text-center py-10 space-y-5 animate-fadeIn">
              <div className="w-14 h-14 rounded-none bg-[#B7E200]/20 border border-[#B7E200] flex items-center justify-center text-[#000000] mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-[#000000]">Message Sent!</h3>
                <p className="text-xs sm:text-sm text-[#6B6B6B] max-w-sm mx-auto">
                  Thank you for reaching out. We have received your message and will respond shortly.
                </p>
              </div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', message: '' });
                }}
                className="px-6 py-2.5 rounded-none bg-[#B7E200] text-[#000000] text-xs font-extrabold uppercase tracking-wider hover:bg-[#a2c900] transition-all cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Full Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#000000] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className={`w-full px-4 py-3.5 rounded-none bg-white border text-sm text-[#000000] placeholder-gray-400 focus:outline-none transition-all ${
                      errors.name
                        ? 'border-red-500'
                        : 'border-[#E5E5E5] focus:border-[#B7E200]'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#000000] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                    className={`w-full px-4 py-3.5 rounded-none bg-white border text-sm text-[#000000] placeholder-gray-400 focus:outline-none transition-all ${
                      errors.email
                        ? 'border-red-500'
                        : 'border-[#E5E5E5] focus:border-[#B7E200]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#000000] mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="How can we help your business?"
                  className={`w-full px-4 py-3.5 rounded-none bg-white border text-sm text-[#000000] placeholder-gray-400 focus:outline-none transition-all ${
                    errors.message
                      ? 'border-red-500'
                      : 'border-[#E5E5E5] focus:border-[#B7E200]'
                  }`}
                />
                {errors.message && (
                  <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-none bg-[#B7E200] text-[#000000] font-extrabold text-xs uppercase tracking-widest hover:bg-[#a2c900] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
              >
                {loading ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          )}
        </div>

        {/* Minimal Direct Email */}
        <div className="mt-8 text-center text-xs text-[#6B6B6B]">
          <span>Or email us directly at </span>
          <a href="mailto:hello@webuildweb.com" className="text-[#000000] font-bold hover:text-[#B7E200] underline">
            hello@webuildweb.com
          </a>
        </div>

      </div>
    </section>
  );
}
