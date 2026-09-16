import React, { useState } from 'react';
import { Sparkles, Check, Send, ShieldCheck, Clock, Layers, Award } from 'lucide-react';

export const CustomOrdersPage: React.FC = () => {
  const [orderType, setOrderType] = useState<string>('wedding');
  const [glazeFinish, setGlazeFinish] = useState<string>('raw-terracotta');
  const [quantityBracket, setQuantityBracket] = useState<string>('25-50');
  const [customLogo, setCustomLogo] = useState<boolean>(true);
  const [customFragrance, setCustomFragrance] = useState<boolean>(false);
  const [customPackaging, setCustomPackaging] = useState<boolean>(true);

  // Form fields
  const [name, setName] = useState('');
  const [companyOrEvent, setCompanyOrEvent] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const orderTypes = [
    { id: 'wedding', label: 'Wedding Favors & Registry', baseUnit: 650, desc: 'Debossed terracotta candles, mini planters, and artisanal chai cups.' },
    { id: 'corporate', label: 'Corporate Gifting & Hampers', baseUnit: 1450, desc: 'Curated wellness boxes packed in handwoven moonj grass crates.' },
    { id: 'interior', label: 'Interior Studio / Architect', baseUnit: 2800, desc: 'Bespoke sculptural vessels, floor urns, and oversized architectural planters.' },
    { id: 'restaurant', label: 'Boutique Cafe & Tableware', baseUnit: 550, desc: 'Commercial-grade food-safe glazed terracotta plates, bowls, and kulhars.' },
  ];

  const glazeFinishes = [
    { id: 'raw-terracotta', label: 'Raw Sun-Baked Terracotta', extra: 0 },
    { id: 'matte-bone', label: 'Matte Bone Slip Finish', extra: 60 },
    { id: 'satin-dune', label: 'Satin Lead-Free Food Glaze', extra: 110 },
    { id: 'fluted-relief', label: 'Hand-Carved Fluted Texture', extra: 90 },
    { id: 'jaali-pierced', label: 'Pierced Heritage Jaali Openwork', extra: 160 },
  ];

  const quantities = [
    { id: '10-25', label: '10 – 25 pcs', multiplier: 20, discount: 0 },
    { id: '25-50', label: '25 – 50 pcs', multiplier: 40, discount: 0.10 },
    { id: '50-100', label: '50 – 100 pcs', multiplier: 75, discount: 0.15 },
    { id: '100-250', label: '100 – 250 pcs', multiplier: 150, discount: 0.20 },
    { id: '250+', label: '250+ pcs (Wholesale)', multiplier: 300, discount: 0.28 },
  ];

  // Estimation calculation
  const currentType = orderTypes.find((t) => t.id === orderType) || orderTypes[0];
  const currentFinish = glazeFinishes.find((f) => f.id === glazeFinish) || glazeFinishes[0];
  const currentQty = quantities.find((q) => q.id === quantityBracket) || quantities[0];

  const basePerUnit = currentType.baseUnit + currentFinish.extra + (customLogo ? 40 : 0) + (customFragrance ? 90 : 0) + (customPackaging ? 80 : 0);
  const discountedPerUnit = Math.round(basePerUnit * (1 - currentQty.discount));
  const estimatedTotal = discountedPerUnit * currentQty.multiplier;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#C25B34]">
          Bespoke Ceramics &amp; Hampers
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#241D1A]">
          Custom Orders &amp; Collaborations
        </h1>
        <p className="text-xs sm:text-sm text-[#4D423D] leading-relaxed">
          Crafting bespoke artifacts for luxury weddings, corporate celebrations, boutique hospitality, and architectural residences directly with our Jaipur ateliers.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Estimator Configurator */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E0D2] shadow-sm space-y-6">
          <div className="flex items-center gap-2 pb-4 border-b border-[#E8E0D2]">
            <Sparkles className="w-5 h-5 text-[#C25B34]" />
            <h2 className="font-serif text-xl font-semibold text-[#241D1A]">
              Step 1: Configure Your Bespoke Batch
            </h2>
          </div>

          {/* 1. Select Order Type */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider font-bold text-[#7A6C65]">
              1. Collaboration Type
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {orderTypes.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setOrderType(type.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    orderType === type.id
                      ? 'border-[#C25B34] bg-[#FDF7F4] ring-2 ring-[#C25B34]/20'
                      : 'border-[#E8E0D2] bg-[#FBF8F3] hover:border-[#C25B34]/60'
                  }`}
                >
                  <p className="font-serif text-sm font-bold text-[#241D1A]">{type.label}</p>
                  <p className="text-[11px] text-[#7A6C65] mt-1">{type.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Select Glaze & Clay Texture */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider font-bold text-[#7A6C65]">
              2. Clay Finish &amp; Texture
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {glazeFinishes.map((finish) => (
                <button
                  key={finish.id}
                  type="button"
                  onClick={() => setGlazeFinish(finish.id)}
                  className={`p-3 rounded-xl border text-left text-xs font-semibold flex items-center justify-between transition-all ${
                    glazeFinish === finish.id
                      ? 'border-[#C25B34] bg-[#FDF7F4] text-[#C25B34]'
                      : 'border-[#E8E0D2] bg-white text-[#4D423D] hover:border-[#D8CCBA]'
                  }`}
                >
                  <span>{finish.label}</span>
                  {finish.extra > 0 && (
                    <span className="text-[10px] text-[#7A6C65]">+₹{finish.extra}/pc</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Quantity Range */}
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-wider font-bold text-[#7A6C65]">
              3. Estimated Quantity
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {quantities.map((qty) => (
                <button
                  key={qty.id}
                  type="button"
                  onClick={() => setQuantityBracket(qty.id)}
                  className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition-all ${
                    quantityBracket === qty.id
                      ? 'border-[#C25B34] bg-[#241D1A] text-white'
                      : 'border-[#E8E0D2] bg-white text-[#4D423D] hover:border-[#C25B34]'
                  }`}
                >
                  <div>{qty.label}</div>
                  {qty.discount > 0 && (
                    <div className="text-[10px] text-[#D97E52] mt-0.5">{Math.round(qty.discount * 100)}% bulk tier</div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* 4. Bespoke Customization Add-ons */}
          <div className="space-y-2 pt-2 border-t border-[#E8E0D2]">
            <label className="text-xs uppercase tracking-wider font-bold text-[#7A6C65]">
              4. Additional Personalization
            </label>
            <div className="space-y-2 text-xs">
              <label className="flex items-center gap-3 p-2.5 rounded-xl bg-[#FBF8F3] border border-[#E8E0D2] cursor-pointer">
                <input
                  type="checkbox"
                  checked={customLogo}
                  onChange={(e) => setCustomLogo(e.target.checked)}
                  className="w-4 h-4 accent-[#C25B34]"
                />
                <span className="flex-1 text-[#241D1A] font-medium">Debossed Monogram, Couple Initials, or Brand Logo on Clay</span>
                <span className="text-[#7A6C65]">+₹40/pc</span>
              </label>

              <label className="flex items-center gap-3 p-2.5 rounded-xl bg-[#FBF8F3] border border-[#E8E0D2] cursor-pointer">
                <input
                  type="checkbox"
                  checked={customFragrance}
                  onChange={(e) => setCustomFragrance(e.target.checked)}
                  className="w-4 h-4 accent-[#C25B34]"
                />
                <span className="flex-1 text-[#241D1A] font-medium">Custom Botanical Fragrance (Kannauj Attar / Petrichor / Oudh)</span>
                <span className="text-[#7A6C65]">+₹90/pc</span>
              </label>

              <label className="flex items-center gap-3 p-2.5 rounded-xl bg-[#FBF8F3] border border-[#E8E0D2] cursor-pointer">
                <input
                  type="checkbox"
                  checked={customPackaging}
                  onChange={(e) => setCustomPackaging(e.target.checked)}
                  className="w-4 h-4 accent-[#C25B34]"
                />
                <span className="flex-1 text-[#241D1A] font-medium">Handcrafted Woven Reed Box &amp; Plantable Seed Paper Notes</span>
                <span className="text-[#7A6C65]">+₹80/pc</span>
              </label>
            </div>
          </div>

          {/* Live Estimate Card */}
          <div className="bg-[#F4EFE6] rounded-2xl p-5 border border-[#E8E0D2] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-[#C25B34]">
                Instant Estimate Bracket
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#241D1A]">
                  ~₹{discountedPerUnit.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-[#7A6C65]">/ piece (sample pricing)</span>
              </div>
              <p className="text-[11px] text-[#7A6C65] mt-1">
                Estimated batch total for ~{currentQty.multiplier} pcs: <strong>₹{estimatedTotal.toLocaleString('en-IN')}</strong>
              </p>
            </div>

            <div className="text-right text-xs text-[#7A6C65] border-t sm:border-t-0 sm:border-l border-[#D8CCBA] pt-2 sm:pt-0 sm:pl-4">
              <div className="flex items-center gap-1.5 text-[#241D1A] font-semibold">
                <Clock className="w-3.5 h-3.5 text-[#C25B34]" />
                <span>Turnaround: 14–21 Days</span>
              </div>
              <p className="text-[11px] mt-0.5">Includes wheel throwing &amp; kiln curing</p>
            </div>
          </div>
        </div>

        {/* Right Column: Custom Order Request Form */}
        <div className="lg:col-span-5 bg-[#FBF8F3] rounded-3xl p-6 sm:p-8 border border-[#E8E0D2] shadow-sm">
          <div className="pb-4 border-b border-[#E8E0D2]">
            <h3 className="font-serif text-xl font-semibold text-[#241D1A]">
              Step 2: Submit Inquiry &amp; Request Sample
            </h3>
            <p className="text-xs text-[#7A6C65] mt-1">
              Our studio manager will review specifications and respond via WhatsApp / email within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                <Check className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-xl font-bold text-[#241D1A]">Inquiry Received!</h4>
              <p className="text-xs text-[#7A6C65] leading-relaxed">
                Thank you, <strong>{name}</strong>. We have logged your request for <strong>{currentType.label}</strong> (~{currentQty.label}) in <strong>{currentFinish.label}</strong>. A master ceramicist from our Jaipur atelier will share digital mockups and courier sample details.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 bg-[#241D1A] text-white text-xs font-semibold py-2.5 px-6 rounded-xl"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5 text-xs">
              <div>
                <label className="font-semibold text-[#241D1A] block mb-1">Your Full Name *</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Alisha Kapoor"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white border border-[#D8CCBA] rounded-xl px-3 py-2 text-xs text-[#241D1A] focus:outline-none focus:border-[#C25B34]"
                />
              </div>

              <div>
                <label className="font-semibold text-[#241D1A] block mb-1">Company, Studio, or Wedding Name</label>
                <input
                  type="text"
                  placeholder="e.g. Studio Vayu / Kabir & Ananya Wedding"
                  value={companyOrEvent}
                  onChange={(e) => setCompanyOrEvent(e.target.value)}
                  className="w-full bg-white border border-[#D8CCBA] rounded-xl px-3 py-2 text-xs text-[#241D1A] focus:outline-none focus:border-[#C25B34]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-[#241D1A] block mb-1">Email Address *</label>
                  <input
                    required
                    type="email"
                    placeholder="alisha@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-[#D8CCBA] rounded-xl px-3 py-2 text-xs text-[#241D1A] focus:outline-none focus:border-[#C25B34]"
                  />
                </div>
                <div>
                  <label className="font-semibold text-[#241D1A] block mb-1">WhatsApp / Phone *</label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white border border-[#D8CCBA] rounded-xl px-3 py-2 text-xs text-[#241D1A] focus:outline-none focus:border-[#C25B34]"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-[#241D1A] block mb-1">Required By Event Date</label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full bg-white border border-[#D8CCBA] rounded-xl px-3 py-2 text-xs text-[#241D1A] focus:outline-none focus:border-[#C25B34]"
                />
              </div>

              <div>
                <label className="font-semibold text-[#241D1A] block mb-1">Specific Requirements or Dimensions</label>
                <textarea
                  rows={3}
                  placeholder="Mention custom colors, clay vessel dimensions, candle fragrance preferences, or delivery location."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-white border border-[#D8CCBA] rounded-xl p-3 text-xs text-[#241D1A] focus:outline-none focus:border-[#C25B34]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  id="btn-submit-custom-inquiry"
                  className="w-full bg-[#C25B34] hover:bg-[#A84924] text-white py-3 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Custom Order Inquiry</span>
                </button>
              </div>

              <p className="text-[11px] text-[#7A6C65] text-center">
                We courier physical material samples (clay chips &amp; fragrance swatches) across India for approved inquiries.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
