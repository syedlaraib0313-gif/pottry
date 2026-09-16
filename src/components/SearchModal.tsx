import React, { useState, useMemo } from 'react';
import { X, Search, ArrowRight, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q) ||
        p.material.toLowerCase().includes(q) ||
        p.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  }, [query]);

  const quickSearches = ['Pottery', 'Terracotta Diya', 'Petrichor Candle', 'Planter', 'Gift Hamper', 'Kulhar'];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-black/60 backdrop-blur-sm">
      <div
        className="w-full max-w-2xl bg-[#FBF8F3] rounded-3xl shadow-2xl border border-[#E8E0D2] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#E8E0D2] flex items-center gap-3 bg-white">
          <Search className="w-5 h-5 text-[#C25B34] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pottery, candles, planters, hampers..."
            className="flex-1 bg-transparent text-sm sm:text-base text-[#241D1A] placeholder-[#7A6C65] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-[#7A6C65] hover:text-[#241D1A]"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#F4EFE6] text-[#7A6C65] hover:text-[#241D1A]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="px-5 py-3 bg-[#F4EFE6] border-b border-[#E8E0D2] flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-[#7A6C65] shrink-0 flex items-center gap-1 font-medium">
            <Sparkles className="w-3 h-3 text-[#C25B34]" />
            Popular:
          </span>
          {quickSearches.map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="bg-white border border-[#D8CCBA] hover:border-[#C25B34] text-[#4D423D] px-2.5 py-1 rounded-full text-[11px] shrink-0 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Search Results Display */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-5">
          {query.trim() === '' ? (
            <div className="text-center py-8 text-xs text-[#7A6C65]">
              Type a word above to search by clay type, artisan craft, product name, or fragrance notes.
            </div>
          ) : searchResults.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-sm font-serif font-semibold text-[#241D1A]">No handcrafted items match "{query}"</p>
              <p className="text-xs text-[#7A6C65] mt-1">
                Try searching for "Terracotta", "Soy Candle", "Kulhar", or browse our collections.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-xs font-semibold text-[#7A6C65] uppercase tracking-wider mb-2">
                Found {searchResults.length} Artifact{searchResults.length > 1 ? 's' : ''}
              </p>
              {searchResults.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="flex items-center gap-4 p-2.5 rounded-xl hover:bg-white hover:shadow-xs border border-transparent hover:border-[#E8E0D2] cursor-pointer transition-all"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-14 h-14 rounded-lg object-cover bg-[#F4EFE6] shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] uppercase font-bold text-[#C25B34]">
                      {product.categoryLabel}
                    </span>
                    <h4 className="font-serif text-sm font-semibold text-[#241D1A] truncate">
                      {product.name}
                    </h4>
                    <p className="text-xs text-[#7A6C65] truncate">{product.subtitle}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm font-bold text-[#241D1A]">
                      ₹{product.price.toLocaleString('en-IN')}
                    </p>
                    <span className="text-[11px] text-[#C25B34] flex items-center gap-0.5 justify-end font-medium">
                      View <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
