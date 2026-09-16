import React, { useState } from 'react';
import { X, Heart, ShoppingBag, Star, ShieldCheck, Sparkles, Truck, Check, Share2 } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!product) return null;

  const currentImage = selectedImg || product.image;
  const images = [product.image, product.secondaryImage].filter(Boolean) as string[];

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleAdd = () => {
    onAddToCart(product, quantity);
  };

  return (
    <div
      id="product-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="product-modal-content"
        className="relative w-full max-w-4xl bg-[#FBF8F3] rounded-3xl shadow-2xl border border-[#E8E0D2] overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="btn-close-modal"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 hover:bg-white text-[#241D1A] hover:text-[#C25B34] shadow-md transition-colors"
          aria-label="Close Product View"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column: Image Gallery */}
          <div className="p-6 sm:p-8 bg-[#F4EFE6] flex flex-col justify-between">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white shadow-inner">
              <img
                src={currentImage}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute top-3 left-3 flex gap-2">
                {product.isBestseller && (
                  <span className="bg-[#241D1A] text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                    Bestseller
                  </span>
                )}
                <span className="bg-[#C25B34] text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                  {product.categoryLabel}
                </span>
              </div>
            </div>

            {/* Thumbnail switcher if multiple photos */}
            {images.length > 1 && (
              <div className="flex items-center gap-3 mt-4">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImg(img)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                      currentImage === img
                        ? 'border-[#C25B34] ring-2 ring-[#C25B34]/20'
                        : 'border-[#E8E0D2] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Packaging reassurance */}
            <div className="mt-6 pt-4 border-t border-[#E8E0D2] flex items-center gap-3 text-xs text-[#7A6C65]">
              <Truck className="w-4 h-4 text-[#C25B34] shrink-0" />
              <span>Ships securely in double-walled honeycomb paper wrap from Jaipur.</span>
            </div>
          </div>

          {/* Right Column: Detailed Product Specs */}
          <div className="p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[80vh]">
            <div className="space-y-4">
              {/* Category & Region */}
              <div className="flex items-center justify-between text-xs text-[#7A6C65]">
                <span className="uppercase tracking-widest font-semibold text-[#C25B34]">
                  {product.categoryLabel}
                </span>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1 text-[11px] text-[#7A6C65] hover:text-[#241D1A]"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copiedLink ? 'Link Copied' : 'Share'}</span>
                </button>
              </div>

              {/* Title & Price */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#241D1A]">
                  {product.name}
                </h2>
                <p className="text-xs text-[#7A6C65] mt-1">{product.subtitle}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center text-amber-600">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-[#241D1A]">{product.rating.toFixed(1)}</span>
                  <span className="text-xs text-[#7A6C65]">({product.reviewsCount} customer reviews)</span>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-3 mt-3">
                  <span className="text-2xl font-bold text-[#241D1A]">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-[#7A6C65] line-through">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                  <span className="text-[11px] text-emerald-700 bg-emerald-50 font-semibold px-2 py-0.5 rounded">
                    Inclusive of all taxes
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="pt-2 border-t border-[#E8E0D2]">
                <p className="text-sm text-[#4D423D] leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Artisan Attribution Card */}
              <div className="bg-[#F4EFE6] rounded-xl p-3.5 border border-[#E8E0D2] flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#C25B34] font-bold">
                    Master Artisan Lineage
                  </span>
                  <p className="text-xs font-semibold text-[#241D1A]">{product.artisanName}</p>
                  <p className="text-[11px] text-[#7A6C65]">{product.artisanLocation}</p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-800 font-medium bg-emerald-100/60 px-2 py-0.5 rounded">
                    <Sparkles className="w-3 h-3 text-emerald-600" />
                    Fair Wage Verified
                  </span>
                </div>
              </div>

              {/* Specifications Matrix */}
              <div className="space-y-2 text-xs pt-1">
                <div className="flex justify-between py-1.5 border-b border-[#E8E0D2]/60">
                  <span className="text-[#7A6C65]">Dimensions</span>
                  <span className="font-medium text-[#241D1A] text-right">{product.dimensions}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#E8E0D2]/60">
                  <span className="text-[#7A6C65]">Material</span>
                  <span className="font-medium text-[#241D1A] text-right">{product.material}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#E8E0D2]/60">
                  <span className="text-[#7A6C65]">Care Guide</span>
                  <span className="font-medium text-[#241D1A] text-right max-w-[240px] truncate" title={product.careInstructions}>
                    {product.careInstructions}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions: Quantity & Add to Cart */}
            <div className="mt-6 pt-4 border-t border-[#E8E0D2] space-y-3">
              <div className="flex items-center gap-3">
                {/* Quantity Controls */}
                <div className="flex items-center border border-[#D8CCBA] rounded-xl bg-white px-2 py-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 flex items-center justify-center text-[#241D1A] hover:text-[#C25B34] font-bold"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-sm font-bold text-[#241D1A]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center text-[#241D1A] hover:text-[#C25B34] font-bold"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  id="btn-modal-add-to-cart"
                  onClick={handleAdd}
                  className="flex-1 bg-[#241D1A] hover:bg-[#C25B34] text-white py-3 px-6 rounded-xl font-medium text-sm flex items-center justify-center gap-2 shadow-lg transition-colors"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag • ₹{(product.price * quantity).toLocaleString('en-IN')}</span>
                </button>

                {/* Wishlist Button */}
                <button
                  onClick={() => onToggleWishlist(product)}
                  className={`p-3 rounded-xl border transition-colors ${
                    isWishlisted
                      ? 'bg-[#C25B34] border-[#C25B34] text-white'
                      : 'bg-white border-[#D8CCBA] text-[#362D29] hover:text-[#C25B34]'
                  }`}
                  title={isWishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}
                >
                  <Heart className="w-5 h-5 fill-current" />
                </button>
              </div>

              <p className="text-center text-[11px] text-[#7A6C65] flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                100% Transit Breakage Cover: If chipped or damaged, we replace with no questions asked.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
