import React from 'react';
import { Sparkles, Heart, Compass, ShieldCheck, Award, MapPin, ArrowRight } from 'lucide-react';
import { Page } from '../types';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const craftSteps = [
    {
      step: '01',
      title: 'Riverbed Clay Sourcing',
      desc: 'We sustainably harvest mineral-rich silt and red clay from natural riverbeds around the Aravalli hills, free from synthetic polymer binders.'
    },
    {
      step: '02',
      title: 'Hand Pugging & Wedging',
      desc: 'Artisans knead the wet clay by hand to eliminate trapped air pockets, ensuring every thrown vessel possesses tensile balance and structural integrity.'
    },
    {
      step: '03',
      title: 'Wheel Throwing & Sculpting',
      desc: 'Turned on slow, hand-balanced wheels by multi-generational master potters in Sanganer and Bassi, giving each silhouette a singular human touch.'
    },
    {
      step: '04',
      title: 'Sun-Drying in Rajasthan Light',
      desc: 'Vessels are slowly cured under the dry sun of Jaipur for three days. Natural evaporation prevents thermal warping during firing.'
    },
    {
      step: '05',
      title: 'Kiln Firing & Mineral Glaze',
      desc: 'Basked in small-batch wood and gas kilns. Some remain unglazed for natural breathability, while dinnerware is treated with lead-free food-safe glaze.'
    },
    {
      step: '06',
      title: 'Eco-Packaging in Honeycomb Wrap',
      desc: 'Each artifact is cushioned in 100% biodegradable kraft honeycomb paper and boxed with plantable seed paper story notes.'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 py-6 sm:py-10">
      {/* Editorial Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#F2D5C8]/70 border border-[#C25B34]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#883719]">
          <Compass className="w-3.5 h-3.5 text-[#C25B34]" />
          <span>Boutique Indian Brand • Jaipur, Rajasthan</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#241D1A] font-medium leading-tight">
          Where Ancient Earth Meets <br />
          <span className="italic font-normal text-[#C25B34]">Contemporary Living.</span>
        </h1>
        <p className="text-base sm:text-lg text-[#4D423D] max-w-2xl mx-auto leading-relaxed">
          Mitti &amp; Bloom is an artisanal sanctuary born in the pink-hued heritage quarter of Jaipur. We bridge ancient Indian craftsmanship with quiet, tactile minimalism for contemporary homes.
        </p>
      </section>

      {/* Origin Story Split Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-[#E8E0D2] shadow-xl border border-[#E8E0D2]">
            <img
              src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1000&q=80"
              alt="Artisan potter working in Jaipur"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white text-xs">
              <p className="font-serif text-lg font-bold">The Sanganer Potter’s Wheel</p>
              <p className="text-neutral-200">Where 5 generations of clay wisdom shape every Mitti &amp; Bloom urn.</p>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#C25B34]">
              The Philosophy Behind Our Name
            </span>
            <h2 className="font-serif text-3xl font-semibold text-[#241D1A] leading-snug">
              "Mitti" is Sacred Soil. <br />
              "Bloom" is the Modern Flourishing of Heritage.
            </h2>
            <div className="space-y-4 text-sm text-[#4D423D] leading-relaxed">
              <p>
                In Hindi, <strong>Mitti</strong> signifies sacred mother earth — the red soil that cradles our roots, absorbs the monsoon rain, and gives life to terracotta. <strong>Bloom</strong> represents how centuries of Indian craftsmanship can flourish anew in modern interior spaces.
              </p>
              <p>
                Founded in Jaipur, Rajasthan, our brand is a response to the quiet fatigue of mass plastic replication and fast furniture. We believe that everyday objects — from the water pitcher on your bedside table to the soy candle lit at twilight — should carry warmth, provenance, and the unmistakable touch of human hands.
              </p>
              <p>
                Every piece is intentionally unhurried. We honor the drying rhythms of Rajasthani sunlight and the seasonal cycles of riverbed clay harvesting.
              </p>
            </div>

            {/* Brand Style Pills */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider text-[#7A6C65] font-semibold mb-2">
                Brand Core Aesthetics:
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-[#F4EFE6] text-[#241D1A] px-3.5 py-1.5 rounded-full font-semibold border border-[#E8E0D2]">
                  Warm
                </span>
                <span className="bg-[#F4EFE6] text-[#241D1A] px-3.5 py-1.5 rounded-full font-semibold border border-[#E8E0D2]">
                  Elegant
                </span>
                <span className="bg-[#F4EFE6] text-[#241D1A] px-3.5 py-1.5 rounded-full font-semibold border border-[#E8E0D2]">
                  Earthy
                </span>
                <span className="bg-[#F4EFE6] text-[#241D1A] px-3.5 py-1.5 rounded-full font-semibold border border-[#E8E0D2]">
                  Minimal
                </span>
                <span className="bg-[#F4EFE6] text-[#241D1A] px-3.5 py-1.5 rounded-full font-semibold border border-[#E8E0D2]">
                  Handmade
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 6-Stage Craft Journey */}
      <section className="bg-[#F4EFE6] py-16 sm:py-20 border-y border-[#E8E0D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#C25B34]">
              The Lifecycle of Clay
            </span>
            <h2 className="font-serif text-3xl font-semibold text-[#241D1A]">
              The Craft Process
            </h2>
            <p className="text-xs sm:text-sm text-[#7A6C65]">
              Six stages of mindful dedication before each vessel reaches your living room.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {craftSteps.map((step) => (
              <div
                key={step.step}
                className="bg-[#FBF8F3] p-6 rounded-2xl border border-[#E8E0D2] shadow-xs hover:shadow-md transition-all"
              >
                <span className="font-serif text-3xl font-bold text-[#C25B34]/60">{step.step}</span>
                <h3 className="font-serif text-lg font-semibold text-[#241D1A] mt-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#7A6C65] mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitments: Ethical Livelihoods */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#241D1A] text-[#F4EFE6] rounded-3xl p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#D97E52] font-semibold">
                Direct Human Impact
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
                Honoring the Hands of Rajasthan
              </h2>
              <p className="text-sm text-[#D8CCBA] leading-relaxed">
                We believe fair wages are not charity; they are the fundamental prerequisite of exquisite craft. In traditional supply chains, middlemen capture up to 80% of pottery profits while artisans struggle. At Mitti &amp; Bloom, 100% of our production occurs in direct, transparent partnership with local artisans in Sanganer, Bassi, Ramgarh, and Dausa.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#D8CCBA]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D97E52]" />
                  <span>Fair Living Wages Guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#D97E52]" />
                  <span>Artisan Family Health Coverage</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
              <button
                onClick={() => onNavigate('artisans')}
                className="w-full bg-[#C25B34] hover:bg-[#A84924] text-white py-3.5 px-6 rounded-full text-xs font-semibold tracking-wide flex items-center justify-center gap-2 transition-colors"
              >
                <span>Meet Our 4 Master Artisans</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('shop')}
                className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 py-3.5 px-6 rounded-full text-xs font-semibold tracking-wide transition-colors"
              >
                Explore Handcrafted Shop
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Visit the Jaipur Studio Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FDF7F4] rounded-3xl p-8 sm:p-10 border border-[#F2D5C8] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-wider font-bold text-[#C25B34]">
              Studio Experience
            </span>
            <h3 className="font-serif text-2xl font-semibold text-[#241D1A]">
              Visiting Jaipur? Experience the Clay Wheel.
            </h3>
            <p className="text-xs text-[#4D423D] max-w-lg">
              Visit our Flagship Studio &amp; Ceramic Atelier in Civil Lines / C-Scheme, Jaipur. Touch wet clay, smell roasted vetiver attars, and select your pottery straight from the cooling shelf.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="shrink-0 bg-[#241D1A] hover:bg-[#C25B34] text-white py-3 px-6 rounded-full text-xs font-semibold transition-colors"
          >
            Studio Hours &amp; Location
          </button>
        </div>
      </section>
    </div>
  );
};
