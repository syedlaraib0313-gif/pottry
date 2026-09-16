import React from 'react';
import { ArrowRight, Sparkles, Heart, ShieldCheck, Award, Flame, Leaf, Compass } from 'lucide-react';
import { Page, Product } from '../types';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { TESTIMONIALS } from '../data/collections';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onSelectCategory: (category: string) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: (productId: string) => boolean;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectCategory,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
}) => {
  const bestsellers = PRODUCTS.filter((p) => p.isBestseller).slice(0, 4);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F4EFE6] via-[#FBF8F3] to-[#FBF8F3] pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-[#E8E0D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[#F2D5C8]/70 border border-[#C25B34]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#883719]">
                <Compass className="w-3.5 h-3.5 text-[#C25B34]" />
                <span>Handmade in Jaipur, Rajasthan, India</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#241D1A] font-medium leading-[1.15] tracking-tight">
                Crafted by Tradition, <br />
                <span className="italic font-normal text-[#C25B34]">Designed for Today.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#4D423D] max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Mitti &amp; Bloom brings earthy materials, modern minimalist silhouettes, and centuries of Rajasthani artisan technique into contemporary living spaces.
              </p>

              {/* Tagline Badge */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold uppercase tracking-wider text-[#7A6C65]">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C25B34]" />
                  Bring the Earth Home
                </span>
                <span className="hidden sm:inline text-neutral-300">•</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C25B34]" />
                  Handmade Stories for Modern Spaces
                </span>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  id="btn-hero-explore"
                  onClick={() => onNavigate('shop')}
                  className="w-full sm:w-auto bg-[#241D1A] hover:bg-[#C25B34] text-white py-3.5 px-8 rounded-full text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <span>Explore Handcrafted Shop</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  id="btn-hero-artisans"
                  onClick={() => onNavigate('artisans')}
                  className="w-full sm:w-auto bg-white/80 hover:bg-white border border-[#D8CCBA] text-[#241D1A] py-3.5 px-7 rounded-full text-sm font-semibold tracking-wide transition-colors"
                >
                  Meet the Artisans
                </button>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-[#E8E0D2] max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                <div>
                  <p className="text-lg sm:text-xl font-serif font-bold text-[#241D1A]">100%</p>
                  <p className="text-[11px] text-[#7A6C65]">Natural Riverbed Clay</p>
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-serif font-bold text-[#241D1A]">48+</p>
                  <p className="text-[11px] text-[#7A6C65]">Artisan Families Supported</p>
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-serif font-bold text-[#241D1A]">Zero</p>
                  <p className="text-[11px] text-[#7A6C65]">Plastic Packaging</p>
                </div>
              </div>
            </div>

            {/* Right Image Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Showcase */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#E8E0D2] aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=1200&q=80"
                    alt="Handcrafted terracotta vase in sunlit Jaipur room"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Floating badge inside photo */}
                  <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-[#E8E0D2] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-bold text-[#C25B34]">
                        Featured Silhouette
                      </span>
                      <p className="font-serif text-sm font-bold text-[#241D1A]">Aravalli Amphora Vessel</p>
                      <p className="text-[11px] text-[#7A6C65]">Raw terracotta with hand-ribbed texture</p>
                    </div>
                    <button
                      onClick={() => onNavigate('shop')}
                      className="bg-[#241D1A] hover:bg-[#C25B34] text-white text-xs font-semibold px-3 py-2 rounded-xl transition-colors shrink-0"
                    >
                      Shop
                    </button>
                  </div>
                </div>

                {/* Decorative floating accent card */}
                <div className="hidden sm:block absolute -top-4 -left-6 bg-[#FBF8F3] border border-[#E8E0D2] shadow-xl rounded-2xl p-3.5 max-w-[200px] animate-pulse-slow">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#C25B34]" />
                    <span className="text-xs font-serif font-bold text-[#241D1A]">Kannauj Attar</span>
                  </div>
                  <p className="text-[10px] text-[#7A6C65] mt-1">
                    Monsoon petrichor &amp; sandalwood candles poured in raw clay.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Philosophy Ribbon */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F4EFE6] rounded-3xl p-8 sm:p-12 border border-[#E8E0D2]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#D8CCBA]/60">
            <div className="flex flex-col items-center text-center px-4 pt-4 md:pt-0">
              <div className="w-12 h-12 rounded-full bg-[#E8E0D2] flex items-center justify-center text-[#C25B34] mb-3">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-base font-semibold text-[#241D1A]">Earthen Pottery</h3>
              <p className="text-xs text-[#7A6C65] mt-1 leading-relaxed">
                Wheel-thrown with pure river silt and fired in small-batch wood &amp; gas kilns in Sanganer.
              </p>
            </div>

            <div className="flex flex-col items-center text-center px-4 pt-4 md:pt-0">
              <div className="w-12 h-12 rounded-full bg-[#E8E0D2] flex items-center justify-center text-[#C25B34] mb-3">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-base font-semibold text-[#241D1A]">Wild Moonj Reeds</h3>
              <p className="text-xs text-[#7A6C65] mt-1 leading-relaxed">
                Coiled by rural women weavers using seasonal river grasses and natural vegetable dyes.
              </p>
            </div>

            <div className="flex flex-col items-center text-center px-4 pt-4 md:pt-0">
              <div className="w-12 h-12 rounded-full bg-[#E8E0D2] flex items-center justify-center text-[#C25B34] mb-3">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-base font-semibold text-[#241D1A]">Botanical Aromas</h3>
              <p className="text-xs text-[#7A6C65] mt-1 leading-relaxed">
                100% natural soy wax scented with authentic Indian baked-earth attar, vetiver, and chandan.
              </p>
            </div>

            <div className="flex flex-col items-center text-center px-4 pt-4 md:pt-0">
              <div className="w-12 h-12 rounded-full bg-[#E8E0D2] flex items-center justify-center text-[#C25B34] mb-3">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-base font-semibold text-[#241D1A]">Direct Fair Trade</h3>
              <p className="text-xs text-[#7A6C65] mt-1 leading-relaxed">
                Zero intermediaries. Every purchase provides dignified livelihood and health security to artisans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#C25B34]">
              Curated Mediums
            </span>
            <h2 className="font-serif text-3xl font-semibold text-[#241D1A] mt-1">
              Shop by Craft Category
            </h2>
          </div>
          <button
            onClick={() => onNavigate('shop')}
            className="text-xs font-semibold text-[#C25B34] hover:text-[#883719] flex items-center gap-1"
          >
            <span>View All Artifacts</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.filter((c) => c.id !== 'all').map((cat) => {
            const previewProduct = PRODUCTS.find((p) => p.category === cat.id);
            return (
              <div
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  onNavigate('shop');
                }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#E8E0D2] cursor-pointer shadow-sm hover:shadow-xl transition-all border border-[#E8E0D2]"
              >
                <img
                  src={previewProduct?.image || 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c'}
                  alt={cat.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity" />

                <div className="absolute inset-x-4 bottom-4 text-white">
                  <h3 className="font-serif text-base sm:text-lg font-semibold tracking-wide leading-tight">
                    {cat.label}
                  </h3>
                  <span className="text-[11px] text-amber-200/90 flex items-center gap-1 mt-1 opacity-90 group-hover:opacity-100">
                    <span>Explore</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#C25B34]">
              Signature Artifacts
            </span>
            <h2 className="font-serif text-3xl font-semibold text-[#241D1A] mt-1">
              Best of Mitti &amp; Bloom
            </h2>
          </div>
          <button
            onClick={() => onNavigate('shop')}
            className="text-xs font-semibold text-[#C25B34] hover:text-[#883719] flex items-center gap-1"
          >
            <span>Browse Full Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
              isWishlisted={isWishlisted(product.id)}
            />
          ))}
        </div>
      </section>

      {/* Editorial Story: The Jaipur Heritage Split Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#241D1A] text-[#F4EFE6] rounded-3xl overflow-hidden shadow-xl border border-[#362D29]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D97E52] font-semibold">
                Slow Living &amp; Sacred Clays
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight">
                Where Tradition Meets Modern Living.
              </h2>
              <p className="text-sm sm:text-base text-[#D8CCBA] leading-relaxed">
                In a world of mass plastic replication, Mitti &amp; Bloom re-centers the tactile warmth of sun-cured earth. Every vessel carries the distinctive fingerprint of the potter who turned it on the wheel, fired with slow patience under the desert sun of Rajasthan.
              </p>
              <div className="space-y-3 pt-2 text-xs text-[#D8CCBA]">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D97E52]" />
                  <span>Harvested sustainably from seasonal river floodplains</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D97E52]" />
                  <span>Naturally breathable terracotta that cools water and roots</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#D97E52]" />
                  <span>Lead-free, food-grade mineral glazes for mindful dining</span>
                </div>
              </div>
              <div className="pt-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="bg-[#C25B34] hover:bg-[#A84924] text-white text-xs font-semibold px-6 py-3.5 rounded-full flex items-center gap-2 transition-colors"
                >
                  <span>Read Our Jaipur Origin Story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-square lg:aspect-auto lg:h-full min-h-[380px] bg-[#362D29]">
              <img
                src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1000&q=80"
                alt="Artisan hands shaping pottery on traditional wheel in Jaipur"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#241D1A]/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection Teasers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#C25B34]">
            Thematic Narratives
          </span>
          <h2 className="font-serif text-3xl font-semibold text-[#241D1A] mt-1">
            Handmade Stories for Modern Spaces
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Collection 1 */}
          <div
            onClick={() => onNavigate('collections')}
            className="group relative rounded-3xl overflow-hidden bg-[#E8E0D2] aspect-[16/10] cursor-pointer shadow-md hover:shadow-xl transition-all border border-[#E8E0D2]"
          >
            <img
              src="https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=1200&q=80"
              alt="The Jaipur Sun Terracotta Series"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-x-6 bottom-6 text-white space-y-1.5">
              <span className="text-[10px] uppercase tracking-widest font-bold text-amber-300">
                Signature Capsule
              </span>
              <h3 className="font-serif text-2xl font-bold">The Jaipur Sun Terracotta Series</h3>
              <p className="text-xs text-neutral-200 line-clamp-2 max-w-md">
                Raw, unglazed warmth inspired by Pink City architecture. Hand-thrown vessels celebrating natural earthen ochre.
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-white underline underline-offset-4">
                  <span>Explore Series</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

          {/* Collection 2 */}
          <div
            onClick={() => onNavigate('collections')}
            className="group relative rounded-3xl overflow-hidden bg-[#E8E0D2] aspect-[16/10] cursor-pointer shadow-md hover:shadow-xl transition-all border border-[#E8E0D2]"
          >
            <img
              src="https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1200&q=80"
              alt="The Shaam Candle Sanctuary"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-x-6 bottom-6 text-white space-y-1.5">
              <span className="text-[10px] uppercase tracking-widest font-bold text-amber-300">
                Sensory Rituals
              </span>
              <h3 className="font-serif text-2xl font-bold">The Shaam Candle Sanctuary</h3>
              <p className="text-xs text-neutral-200 line-clamp-2 max-w-md">
                Soy wax candles poured in heirloom clay pots with Kannauj petrichor, sandalwood, and desert amber.
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-white underline underline-offset-4">
                  <span>Discover Candles</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials & Spaces */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-lg mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#C25B34]">
            Collector Stories
          </span>
          <h2 className="font-serif text-3xl font-semibold text-[#241D1A] mt-1">
            Cherished in Modern Homes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-2xl p-6 border border-[#E8E0D2] shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(test.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-xs text-[#4D423D] italic leading-relaxed">
                  "{test.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F4EFE6] flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-serif font-bold text-[#241D1A]">{test.author}</h4>
                  <p className="text-[11px] text-[#7A6C65]">{test.role} • {test.location}</p>
                </div>
                <span className="text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                  Verified Collector
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom & Bulk Gifting Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FDF7F4] rounded-3xl p-8 sm:p-12 border border-[#F2D5C8] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center lg:text-left">
            <span className="text-xs uppercase tracking-widest font-bold text-[#C25B34]">
              For Weddings, Corporate &amp; Interior Designers
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#241D1A]">
              Bespoke Ceramics &amp; Handcrafted Gifting
            </h2>
            <p className="text-xs sm:text-sm text-[#4D423D] leading-relaxed">
              We collaborate with architects, boutique hotels, and couples to craft custom-glazed tableware, debossed terracotta wedding favors, and corporate wellness hampers with direct artisan support.
            </p>
          </div>
          <button
            onClick={() => onNavigate('custom')}
            className="shrink-0 bg-[#C25B34] hover:bg-[#A84924] text-white py-3.5 px-8 rounded-full text-xs font-semibold tracking-wide transition-colors shadow-md"
          >
            Design Your Custom Order
          </button>
        </div>
      </section>
    </div>
  );
};
