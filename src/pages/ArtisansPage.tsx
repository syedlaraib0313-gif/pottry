import React from 'react';
import { Sparkles, Heart, ShieldCheck, Award, MapPin, ArrowRight } from 'lucide-react';
import { ARTISANS, ARTISAN_IMPACT_STATS } from '../data/artisans';
import { Page } from '../types';

interface ArtisansPageProps {
  onNavigate: (page: Page) => void;
}

export const ArtisansPage: React.FC<ArtisansPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#C25B34]">
          Our Craft Custodians
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#241D1A]">
          Meet the Master Artisans of Rajasthan
        </h1>
        <p className="text-xs sm:text-sm text-[#4D423D] leading-relaxed">
          At Mitti &amp; Bloom, every pottery curve, wild grass weave, and natural botanical aroma is shaped by living human mastery. We celebrate the men and women who keep India's craft legacy vibrant.
        </p>
      </div>

      {/* Impact Stats Strip */}
      <div className="bg-[#241D1A] text-[#F4EFE6] rounded-3xl p-8 sm:p-10 border border-[#362D29]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#362D29]">
          {ARTISAN_IMPACT_STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-4 pt-4 sm:pt-0">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#D97E52]">
                {stat.value}
              </span>
              <h4 className="text-sm font-semibold text-white mt-1">{stat.label}</h4>
              <p className="text-xs text-[#D8CCBA]/80 mt-0.5">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Artisan Profiles Grid */}
      <div className="space-y-12">
        {ARTISANS.map((artisan, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={artisan.id}
              className={`bg-white rounded-3xl p-6 sm:p-10 border border-[#E8E0D2] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                !isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Photo */}
              <div className={`lg:col-span-5 relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#F4EFE6] ${!isEven ? 'lg:order-2' : ''}`}>
                <img
                  src={artisan.image}
                  alt={artisan.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="bg-[#C25B34] text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full">
                    {artisan.experienceYears} Years Craft Mastery
                  </span>
                  <h3 className="font-serif text-xl font-bold mt-2">{artisan.name}</h3>
                  <p className="text-xs text-neutral-200 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#D97E52]" />
                    {artisan.location}
                  </p>
                </div>
              </div>

              {/* Bio & Details */}
              <div className={`lg:col-span-7 space-y-4 ${!isEven ? 'lg:order-1' : ''}`}>
                <div>
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#C25B34]">
                    {artisan.craft}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#241D1A]">
                    {artisan.name}
                  </h2>
                  <p className="text-xs font-medium text-[#7A6C65] mt-0.5">{artisan.title}</p>
                </div>

                {/* Quote */}
                <blockquote className="bg-[#FDF7F4] border-l-4 border-[#C25B34] p-4 rounded-r-xl italic text-xs sm:text-sm text-[#4D423D] leading-relaxed">
                  "{artisan.quote}"
                </blockquote>

                <p className="text-xs sm:text-sm text-[#4D423D] leading-relaxed">
                  {artisan.bio}
                </p>

                {/* Signature creations */}
                <div className="pt-2">
                  <span className="text-xs font-semibold text-[#7A6C65] block mb-2">
                    Key Mitti &amp; Bloom Artifacts Hand-turned by {artisan.name.split(' ')[0]}:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {artisan.specialityProducts.map((pName, pIdx) => (
                      <span
                        key={pIdx}
                        className="bg-[#F4EFE6] border border-[#D8CCBA] text-[#241D1A] text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {pName}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Ethical Trade Manifesto */}
      <div className="bg-[#F4EFE6] rounded-3xl p-8 sm:p-12 border border-[#E8E0D2] text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest font-bold text-[#C25B34]">
          Our Uncompromising Promise
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#241D1A]">
          Direct Craft. Zero Exploitation.
        </h3>
        <p className="text-xs sm:text-sm text-[#4D423D] leading-relaxed">
          Traditional artisans are often treated as low-cost manufacturing hands. We treat them as co-creators, artists, and heritage custodians. 65% of every product's margin goes directly into artisan wages, seasonal raw material reserves, and family education funds.
        </p>
        <div className="pt-2">
          <button
            onClick={() => onNavigate('shop')}
            className="bg-[#241D1A] hover:bg-[#C25B34] text-white text-xs font-semibold py-3 px-8 rounded-full transition-colors inline-flex items-center gap-2"
          >
            <span>Support Artisans &amp; Shop</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
