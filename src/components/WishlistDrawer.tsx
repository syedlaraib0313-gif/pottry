import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlist: Product[];
  onRemoveWishlist: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onStartShopping: () => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlist,
  onRemoveWishlist,
  onAddToCart,
  onStartShopping,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FBF8F3] shadow-2xl border-l border-[#E8E0D2] flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-[#E8E0D2] flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#C25B34] fill-current" />
              <h2 className="font-serif text-xl font-semibold text-[#241D1A]">
                Saved Artifacts
              </h2>
              <span className="text-xs bg-[#F4EFE6] text-[#7A6C65] font-semibold px-2 py-0.5 rounded-full">
                {wishlist.length}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#7A6C65] hover:text-[#241D1A] rounded-full hover:bg-[#F4EFE6]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List or Empty State */}
          {wishlist.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#F4EFE6] flex items-center justify-center text-[#7A6C65] mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#241D1A]">
                No saved pieces yet
              </h3>
              <p className="text-xs text-[#7A6C65] max-w-xs mt-1 leading-relaxed">
                Heart any vase, planter, or candle to save it for your next space curation or gift registry.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onStartShopping();
                }}
                className="mt-6 bg-[#241D1A] hover:bg-[#C25B34] text-white text-xs font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Browse Handcrafted Catalog
              </button>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {wishlist.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-4 p-3 rounded-xl bg-white border border-[#E8E0D2] shadow-xs"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 rounded-lg object-cover bg-[#F4EFE6] shrink-0"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif text-sm font-semibold text-[#241D1A] truncate pr-2">
                          {product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveWishlist(product)}
                          className="text-[#7A6C65] hover:text-red-600 transition-colors p-1"
                          title="Remove from wishlist"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-[#7A6C65]">{product.categoryLabel}</p>
                      <p className="text-xs font-bold text-[#241D1A] mt-1">
                        ₹{product.price.toLocaleString('en-IN')}
                      </p>
                    </div>

                    <div className="mt-2 pt-1 flex justify-end">
                      <button
                        onClick={() => {
                          onAddToCart(product);
                          onRemoveWishlist(product);
                        }}
                        className="bg-[#241D1A] hover:bg-[#C25B34] text-white text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Move to Bag</span>
                      </button>
                    </div>
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
