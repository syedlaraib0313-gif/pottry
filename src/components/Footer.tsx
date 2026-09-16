import React, { useState } from 'react';
import { Mail, ArrowRight, ShieldCheck, Truck, RefreshCw, HeartHandshake, MapPin, Phone, Instagram } from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
  onSelectCategory?: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectCategory }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#241D1A] text-[#F4EFE6] border-t border-[#362D29] mt-20">
      {/* Artisan Value Badges */}
      <div className="border-b border-[#362D29]/70 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#362D29] flex items-center justify-center shrink-0 text-[#D97E52]">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-white">Fair Artisan Wages</h4>
              <p className="text-xs text-[#D8CCBA]/80 mt-1 leading-relaxed">
                Direct partnerships with 48+ master craft families across rural Rajasthan without middlemen.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#362D29] flex items-center justify-center shrink-0 text-[#D97E52]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-white">Safe Pottery Guarantee</h4>
              <p className="text-xs text-[#D8CCBA]/80 mt-1 leading-relaxed">
                Honeycomb paper-cushioned transit. If any piece arrives cracked, we replace it instantly for free.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#362D29] flex items-center justify-center shrink-0 text-[#D97E52]">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-white">Free Pan-India Delivery</h4>
              <p className="text-xs text-[#D8CCBA]/80 mt-1 leading-relaxed">
                Complimentary tracked express shipping across India on all orders above ₹2,499.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#362D29] flex items-center justify-center shrink-0 text-[#D97E52]">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-white">Plastic-Free Packaging</h4>
              <p className="text-xs text-[#D8CCBA]/80 mt-1 leading-relaxed">
                100% recyclable kraft boxes, jute strings, and plantable seed paper gift envelopes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Story Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="cursor-pointer" onClick={() => onNavigate('home')}>
              <span className="font-serif text-3xl font-semibold tracking-tight text-white">
                Mitti &amp; Bloom
              </span>
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#D97E52] mt-0.5">
                Handmade • Jaipur, Rajasthan
              </p>
            </div>
            <p className="text-sm text-[#D8CCBA] leading-relaxed max-w-sm">
              Mitti &amp; Bloom is a boutique Indian brand celebrating the slow poetry of earth, clay, and human hands. Rooted in Jaipur's royal artisan heritage, crafted for contemporary spaces.
            </p>
            <div className="pt-2 text-xs text-[#D8CCBA] space-y-2">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D97E52] shrink-0" />
                Plot 14, Civil Lines / C-Scheme Quarter, Jaipur, Rajasthan 302006
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D97E52] shrink-0" />
                +91 (0141) 289-4450 / +91 98290 84721
              </p>
            </div>
          </div>

          {/* Quick Pages */}
          <div>
            <h5 className="text-xs uppercase tracking-widest text-[#D97E52] font-semibold mb-4">
              Explore
            </h5>
            <ul className="space-y-2.5 text-sm text-[#D8CCBA]">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  About Our Brand
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('shop')} className="hover:text-white transition-colors">
                  The Full Catalog
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('collections')} className="hover:text-white transition-colors">
                  Curated Collections
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('artisans')} className="hover:text-white transition-colors">
                  Meet Our Artisans
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('custom')} className="hover:text-white transition-colors">
                  Custom &amp; Bulk Orders
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Visit Studio / Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h5 className="text-xs uppercase tracking-widest text-[#D97E52] font-semibold mb-4">
              Categories
            </h5>
            <ul className="space-y-2.5 text-sm text-[#D8CCBA]">
              <li>
                <button
                  onClick={() => {
                    onNavigate('shop');
                    onSelectCategory?.('pottery');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Handcrafted Pottery
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('shop');
                    onSelectCategory?.('terracotta');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Terracotta Décor
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('shop');
                    onSelectCategory?.('candles');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Scented Soy Candles
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('shop');
                    onSelectCategory?.('planters');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Decorative Planters
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('shop');
                    onSelectCategory?.('baskets');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Handwoven Baskets
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('shop');
                    onSelectCategory?.('tableware');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Artisanal Tableware
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('shop');
                    onSelectCategory?.('gift-hampers');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Gift Hampers
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="space-y-4">
            <h5 className="text-xs uppercase tracking-widest text-[#D97E52] font-semibold">
              The Artisan Circle
            </h5>
            <p className="text-xs text-[#D8CCBA] leading-relaxed">
              Join for intimate kiln dispatch announcements, home décor styling journals, and receive 10% off your initial order.
            </p>
            {subscribed ? (
              <div className="bg-[#362D29] border border-[#D97E52]/40 rounded-lg p-3 text-xs text-[#F4EFE6] space-y-1">
                <p className="font-semibold text-[#D97E52]">Padharo sa! You are subscribed.</p>
                <p className="text-[11px] text-[#D8CCBA]">
                  Use voucher code <strong className="text-white bg-[#241D1A] px-1.5 py-0.5 rounded border border-[#D97E52]/60">JAIPUR10</strong> at checkout for 10% off.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full bg-[#362D29] border border-[#4D423D] rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-[#7A6C65] focus:outline-none focus:border-[#D97E52]"
                  />
                </div>
                <button
                  id="btn-subscribe-newsletter"
                  type="submit"
                  className="w-full bg-[#C25B34] hover:bg-[#A84924] text-white py-2.5 px-4 rounded-lg text-xs font-semibold tracking-wide flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Join The Circle</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#362D29] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A6C65]">
          <p>© {new Date().getFullYear()} Mitti &amp; Bloom. All rights reserved. Crafted by Tradition, Designed for Today.</p>
          <div className="flex items-center space-x-6 text-[11px]">
            <span>Privacy Policy</span>
            <span>Terms of Craftsmanship</span>
            <span>Shipping &amp; Breakage Policy</span>
            <span>Made with love in Jaipur</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
