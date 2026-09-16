import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, Menu, X, MapPin, Sparkles } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onSearchClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onSearchClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: Page; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'shop', label: 'Shop' },
    { id: 'collections', label: 'Collections' },
    { id: 'artisans', label: 'Our Artisans' },
    { id: 'custom', label: 'Custom Orders' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FBF8F3]/95 backdrop-blur-md border-b border-[#E8E0D2] transition-all">
      {/* Top Announcement Bar */}
      <div className="bg-[#241D1A] text-[#F4EFE6] text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[#D97E52] font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              Festive Season
            </span>
            <span className="hidden sm:inline text-neutral-400">•</span>
            <span>Complimentary pan-India delivery on orders over ₹2,499</span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-neutral-300">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#D97E52]" />
              Jaipur, Rajasthan
            </span>
            <span>•</span>
            <span>100% Safe Transit Guarantee</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              id="btn-mobile-menu"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#241D1A] hover:text-[#C25B34] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Brand Logo & Heritage Subtitle */}
          <div className="flex flex-col items-center lg:items-start cursor-pointer" onClick={() => handleNavClick('home')}>
            <span className="font-serif text-2xl sm:text-3xl tracking-tight text-[#241D1A] font-semibold hover:text-[#C25B34] transition-colors">
              Mitti &amp; Bloom
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#7A6C65] font-medium">
              Handcrafted • Jaipur
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 text-sm font-medium tracking-wide transition-colors ${
                    isActive
                      ? 'text-[#C25B34] font-semibold'
                      : 'text-[#4D423D] hover:text-[#C25B34]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C25B34] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Search Trigger */}
            <button
              id="btn-search-trigger"
              type="button"
              onClick={onSearchClick}
              className="p-2 text-[#362D29] hover:text-[#C25B34] hover:bg-[#F4EFE6] rounded-full transition-colors"
              title="Search Catalog"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Trigger */}
            <button
              id="btn-wishlist-trigger"
              type="button"
              onClick={onOpenWishlist}
              className="relative p-2 text-[#362D29] hover:text-[#C25B34] hover:bg-[#F4EFE6] rounded-full transition-colors"
              title="Wishlist"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 bg-[#C25B34] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Trigger */}
            <button
              id="btn-cart-trigger"
              type="button"
              onClick={onOpenCart}
              className="relative flex items-center gap-2 bg-[#241D1A] hover:bg-[#C25B34] text-white px-3.5 py-2 rounded-full text-xs font-medium tracking-wide transition-all shadow-sm"
              title="Shopping Cart"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Bag</span>
              <span className="bg-white/20 px-1.5 py-0.5 rounded-full text-[11px] font-bold">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FBF8F3] border-b border-[#E8E0D2] px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`mobile-nav-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`text-left py-2 px-3 rounded-lg text-base font-medium transition-colors ${
                  currentPage === link.id
                    ? 'bg-[#F4EFE6] text-[#C25B34] font-semibold'
                    : 'text-[#362D29] hover:bg-[#F4EFE6] hover:text-[#C25B34]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[#E8E0D2] flex flex-col gap-2 text-xs text-[#7A6C65]">
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C25B34]" />
              Boutique Studio: Civil Lines, Jaipur, Rajasthan
            </p>
            <p className="text-[11px] text-[#4D423D]">
              Open Mon–Sat 10:30 AM – 7:30 PM IST
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
