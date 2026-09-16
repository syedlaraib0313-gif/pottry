import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Check, ChevronDown, ChevronUp, MessageSquare, Sparkles } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState('general');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How do you safely ship fragile terracotta pottery across India?',
      a: 'We use 100% recyclable, double-walled kraft boxes lined with expandable honeycomb paper and molded pulp end-caps. Each piece is cushioned to withstand transit bumps without single-use plastic bubble wrap.'
    },
    {
      q: 'What is your breakage replacement guarantee?',
      a: 'In the rare event that an item arrives chipped or damaged during courier transit, simply share a quick photo on WhatsApp or email within 48 hours of delivery. We will dispatch an immediate replacement at zero additional charge.'
    },
    {
      q: 'Can I reuse the terracotta candle pots after the wax finishes?',
      a: 'Yes! That is central to our circular design ethos. Once the candle burns down, wash the vessel with warm soapy water to dissolve any leftover natural soy wax. The pot can then be repurposed as a succulent planter, desk pen holder, or coin dish.'
    },
    {
      q: 'Are your tableware items food-grade and microwave safe?',
      a: 'Our glazed ceramic tableware and Mitti Chai Kulhars are crafted with certified lead-free, non-toxic food-safe mineral glazes and high-fired for strength. They are microwave and dishwasher friendly.'
    },
    {
      q: 'Can I visit the Jaipur workshop and try the potter’s wheel?',
      a: 'Yes! We welcome visitors to our Civil Lines Flagship Studio in Jaipur. We host curated 90-minute wheel-throwing and terracotta hand-building sessions on Friday and Saturday afternoons by prior appointment.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#C25B34]">
          Connect with Us
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#241D1A]">
          Visit Our Jaipur Studio &amp; Get in Touch
        </h1>
        <p className="text-xs sm:text-sm text-[#4D423D] leading-relaxed">
          Whether you have a question about our slow-crafted pottery, want to schedule a workshop visit in Jaipur, or wish to discuss an architectural project, we’d love to hear from you.
        </p>
      </div>

      {/* 3 Contact Pillar Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-[#E8E0D2] shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-full bg-[#FDF7F4] text-[#C25B34] flex items-center justify-center mb-3">
            <MapPin className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-lg font-semibold text-[#241D1A]">Boutique Studio &amp; Kiln</h3>
          <p className="text-xs text-[#7A6C65] leading-relaxed">
            Plot 14, Civil Lines / C-Scheme Quarter, Jaipur, Rajasthan 302006, India.
          </p>
          <span className="inline-block text-[11px] text-[#C25B34] font-semibold pt-1">
            Near Central Park Heritage Circle
          </span>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-[#E8E0D2] shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-full bg-[#FDF7F4] text-[#C25B34] flex items-center justify-center mb-3">
            <Clock className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-lg font-semibold text-[#241D1A]">Studio Timings</h3>
          <p className="text-xs text-[#7A6C65] leading-relaxed">
            Monday to Saturday: 10:30 AM – 7:30 PM IST <br />
            Sunday: By private appointment for interior design consultations.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-[#E8E0D2] shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-full bg-[#FDF7F4] text-[#C25B34] flex items-center justify-center mb-3">
            <Phone className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-lg font-semibold text-[#241D1A]">Direct Communications</h3>
          <p className="text-xs text-[#7A6C65] leading-relaxed">
            WhatsApp &amp; Orders: +91 98290 84721 <br />
            Telephone: +91 (0141) 289-4450 <br />
            Email: care@mittiandbloom.com
          </p>
        </div>
      </div>

      {/* Main Form and Studio Map Experience Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-[#FBF8F3] rounded-3xl p-6 sm:p-10 border border-[#E8E0D2] shadow-sm">
          <div className="pb-4 border-b border-[#E8E0D2]">
            <h2 className="font-serif text-2xl font-semibold text-[#241D1A]">Send a Message</h2>
            <p className="text-xs text-[#7A6C65] mt-1">We answer all inquiries with genuine care and prompt attention.</p>
          </div>

          {submitted ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#241D1A]">Message Sent!</h3>
              <p className="text-xs text-[#7A6C65] max-w-sm mx-auto">
                Thank you, <strong>{name}</strong>. Our Jaipur atelier will review your note and get in touch with you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 bg-[#241D1A] text-white text-xs font-semibold py-2.5 px-6 rounded-xl"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-semibold text-[#241D1A] block mb-1">Your Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Meera Varma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border border-[#D8CCBA] rounded-xl px-3.5 py-2.5 text-xs text-[#241D1A] focus:outline-none focus:border-[#C25B34]"
                  />
                </div>
                <div>
                  <label className="font-semibold text-[#241D1A] block mb-1">Email Address *</label>
                  <input
                    required
                    type="email"
                    placeholder="meera@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-[#D8CCBA] rounded-xl px-3.5 py-2.5 text-xs text-[#241D1A] focus:outline-none focus:border-[#C25B34]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-semibold text-[#241D1A] block mb-1">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-[#D8CCBA] rounded-xl px-3.5 py-2.5 text-xs text-[#241D1A] focus:outline-none focus:border-[#C25B34]"
                  />
                </div>
                <div>
                  <label className="font-semibold text-[#241D1A] block mb-1">Inquiry Topic</label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full bg-white border border-[#D8CCBA] rounded-xl px-3.5 py-2.5 text-xs text-[#241D1A] font-medium focus:outline-none focus:border-[#C25B34]"
                  >
                    <option value="general">General Home Décor Question</option>
                    <option value="order">Order Status &amp; Tracking</option>
                    <option value="visit">Schedule Studio Visit / Wheel Class</option>
                    <option value="interior">Interior Design / Architecture Bulk</option>
                    <option value="press">Press &amp; Collaborations</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-semibold text-[#241D1A] block mb-1">Your Message *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Share details about what you are looking for..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white border border-[#D8CCBA] rounded-xl p-3 text-xs text-[#241D1A] focus:outline-none focus:border-[#C25B34]"
                />
              </div>

              <button
                type="submit"
                id="btn-submit-contact"
                className="w-full bg-[#241D1A] hover:bg-[#C25B34] text-white py-3 px-6 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Send Note to Jaipur Studio</span>
              </button>
            </form>
          )}
        </div>

        {/* Studio Visual Atmosphere */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#241D1A] text-[#F4EFE6] rounded-3xl p-6 sm:p-8 border border-[#362D29] space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#D97E52] font-semibold">
              The Flagship Experience
            </span>
            <h3 className="font-serif text-2xl font-normal text-white">
              Visiting the Pink City?
            </h3>
            <p className="text-xs text-[#D8CCBA] leading-relaxed">
              Step into our light-filled courtyard studio shaded by bougainvillea. Feel the cool dampness of fresh clay, observe our potters wheel-turning amphoras, and hand-select unglazed terracotta vessels fresh from the wood kiln.
            </p>
            <div className="pt-2 text-xs space-y-2 text-[#D8CCBA]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D97E52]" />
                <span>Handmade herbal chai served in Mitti Kulhars</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D97E52]" />
                <span>Complimentary custom gift packaging station</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D97E52]" />
                <span>Wheel-throwing pottery workshops every weekend</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden aspect-[16/10] bg-[#E8E0D2] border border-[#E8E0D2] shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=800&q=80"
              alt="Mitti and Bloom Studio courtyard in Jaipur"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
              <p className="font-serif font-bold">Jaipur Studio Gallery</p>
              <p className="text-[11px] text-neutral-200">Civil Lines Heritage Quarter</p>
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions Accordion */}
      <div className="max-w-3xl mx-auto space-y-6 pt-6">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#C25B34]">
            Helpful Information
          </span>
          <h2 className="font-serif text-3xl font-semibold text-[#241D1A]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E8E0D2] overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-serif text-base font-semibold text-[#241D1A]">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#C25B34] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#7A6C65] shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-[#4D423D] leading-relaxed border-t border-[#F4EFE6]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
