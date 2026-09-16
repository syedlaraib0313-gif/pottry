import React from 'react';
import { Heart, Eye, ShoppingBag, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
}) => {
  return (
    <div
      id={`product-card-${product.id}`}
      className="group relative flex flex-col bg-[#FBF8F3] rounded-2xl border border-[#E8E0D2] overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#C25B34]/30"
    >
      {/* Image Showcase Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#F4EFE6]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Secondary Image on Hover if available */}
        {product.secondaryImage && (
          <img
            src={product.secondaryImage}
            alt={`${product.name} alternate view`}
            className="absolute inset-0 h-full w-full object-cover object-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
            loading="lazy"
          />
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isBestseller && (
            <span className="bg-[#241D1A] text-[#F4EFE6] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
              Artisan Choice
            </span>
          )}
          {product.isNewArrival && (
            <span className="bg-[#C25B34] text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
              New Batch
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          id={`btn-wishlist-${product.id}`}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all shadow-sm z-10 ${
            isWishlisted
              ? 'bg-[#C25B34] text-white'
              : 'bg-white/80 text-[#362D29] hover:bg-white hover:text-[#C25B34]'
          }`}
          title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
          aria-label="Wishlist"
        >
          <Heart className="w-4 h-4 fill-current" />
        </button>

        {/* Quick View Button (desktop slide-up) */}
        <div className="absolute inset-x-3 bottom-3 hidden sm:flex gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
          <button
            id={`btn-quick-view-${product.id}`}
            type="button"
            onClick={() => onQuickView(product)}
            className="flex-1 bg-white/95 hover:bg-white text-[#241D1A] py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md transition-colors"
          >
            <Eye className="w-3.5 h-3.5 text-[#C25B34]" />
            <span>Quick View</span>
          </button>
          <button
            id={`btn-quick-add-${product.id}`}
            type="button"
            onClick={() => onAddToCart(product)}
            className="bg-[#241D1A] hover:bg-[#C25B34] text-white p-2 rounded-lg text-xs font-semibold flex items-center justify-center shadow-md transition-colors"
            title="Add to Bag"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Information Body */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        {/* Category & Artisan Origin */}
        <div className="flex items-center justify-between text-[11px] text-[#7A6C65] mb-1.5 font-medium">
          <span className="uppercase tracking-wider text-[#C25B34]">
            {product.categoryLabel}
          </span>
          <span>{product.artisanLocation}</span>
        </div>

        {/* Product Title */}
        <h3
          onClick={() => onQuickView(product)}
          className="font-serif text-lg font-semibold text-[#241D1A] group-hover:text-[#C25B34] transition-colors cursor-pointer line-clamp-1"
        >
          {product.name}
        </h3>

        {/* Subtitle / Description excerpt */}
        <p className="text-xs text-[#7A6C65] mt-1 line-clamp-2 leading-relaxed flex-grow">
          {product.subtitle}
        </p>

        {/* Ratings & Reviews */}
        <div className="flex items-center gap-1.5 mt-2.5">
          <div className="flex items-center text-amber-600">
            <Star className="w-3.5 h-3.5 fill-current" />
          </div>
          <span className="text-xs font-semibold text-[#241D1A]">{product.rating.toFixed(1)}</span>
          <span className="text-[11px] text-[#7A6C65]">({product.reviewsCount})</span>
        </div>

        {/* Price & Mobile Add to Bag */}
        <div className="mt-3 pt-3 border-t border-[#E8E0D2] flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-bold text-[#241D1A]">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[#7A6C65] line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          {/* Direct Add to Bag for Mobile / Desktop fallback */}
          <button
            id={`btn-card-add-${product.id}`}
            type="button"
            onClick={() => onAddToCart(product)}
            className="sm:hidden bg-[#241D1A] hover:bg-[#C25B34] text-white p-2 rounded-lg transition-colors"
            title="Add to Bag"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
