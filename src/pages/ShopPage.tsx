import React, { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal, ArrowUpDown, Search, RotateCcw, Sparkles } from 'lucide-react';
import { Product, ProductCategory } from '../types';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCard } from '../components/ProductCard';

interface ShopPageProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: (productId: string) => boolean;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  selectedCategory,
  onSelectCategory,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [maxPrice, setMaxPrice] = useState<number>(5500);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Category filter
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }
      // Price filter
      if (p.price > maxPrice) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matches =
          p.name.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.material.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q));
        if (!matches) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
    });
  }, [selectedCategory, maxPrice, searchQuery, sortBy]);

  const resetFilters = () => {
    onSelectCategory('all');
    setSearchQuery('');
    setMaxPrice(5500);
    setSortBy('featured');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#C25B34]">
          The Complete Catalog
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#241D1A]">
          Handmade Home Décor &amp; Lifestyle
        </h1>
        <p className="text-xs sm:text-sm text-[#4D423D] leading-relaxed">
          Crafted from natural terracotta, wheel-thrown clays, wild river grasses, and botanical soy wax. Each piece is unique and ethically created by Jaipur artisans.
        </p>
      </div>

      {/* Category Pills Slider */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-[#241D1A] text-white shadow-sm'
                  : 'bg-white border border-[#D8CCBA] text-[#4D423D] hover:border-[#C25B34] hover:text-[#C25B34]'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Filter and Sort Toolbar */}
      <div className="bg-white rounded-2xl p-4 border border-[#E8E0D2] shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-[#7A6C65] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search within shop..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#FBF8F3] border border-[#D8CCBA] rounded-xl pl-9 pr-3 py-2 text-xs text-[#241D1A] focus:outline-none focus:border-[#C25B34]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-[#7A6C65] hover:text-[#241D1A]"
            >
              ×
            </button>
          )}
        </div>

        {/* Price Slider & Sort Controls */}
        <div className="flex flex-wrap items-center justify-between md:justify-end gap-4 w-full md:w-auto">
          {/* Price Range Filter */}
          <div className="flex items-center gap-2 text-xs text-[#7A6C65]">
            <span>Max Price:</span>
            <input
              type="range"
              min={1000}
              max={5500}
              step={200}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-24 sm:w-28 accent-[#C25B34] cursor-pointer"
            />
            <span className="font-bold text-[#241D1A] min-w-[55px]">
              ₹{maxPrice.toLocaleString('en-IN')}
            </span>
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-1.5 text-xs text-[#7A6C65]">
            <ArrowUpDown className="w-3.5 h-3.5 text-[#C25B34]" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#FBF8F3] border border-[#D8CCBA] rounded-xl px-3 py-2 text-xs font-semibold text-[#241D1A] focus:outline-none focus:border-[#C25B34]"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

          {/* Reset Filters button */}
          {(selectedCategory !== 'all' || searchQuery || maxPrice < 5500 || sortBy !== 'featured') && (
            <button
              onClick={resetFilters}
              className="text-xs text-[#C25B34] hover:text-[#883719] font-semibold flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Active Results Summary */}
      <div className="flex items-center justify-between text-xs text-[#7A6C65] px-1">
        <span>
          Showing <strong>{filteredProducts.length}</strong> of {PRODUCTS.length} Handcrafted Artifacts
        </span>
        <span className="flex items-center gap-1 text-emerald-800">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          All prices inclusive of taxes &amp; honeycomb packaging
        </span>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-[#E8E0D2] p-8 space-y-3">
          <p className="font-serif text-xl font-semibold text-[#241D1A]">
            No artifacts found matching your criteria
          </p>
          <p className="text-xs text-[#7A6C65] max-w-sm mx-auto">
            Try adjusting your search keywords, raising the maximum price threshold, or selecting "All Artifacts".
          </p>
          <button
            onClick={resetFilters}
            className="mt-2 bg-[#241D1A] hover:bg-[#C25B34] text-white text-xs font-semibold px-6 py-2.5 rounded-xl transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
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
      )}
    </div>
  );
};
