import React, { useState } from 'react';
import { ArrowRight, Sparkles, Layers, ShoppingBag } from 'lucide-react';
import { Product, Collection } from '../types';
import { COLLECTIONS } from '../data/collections';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';

interface CollectionsPageProps {
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: (productId: string) => boolean;
}

export const CollectionsPage: React.FC<CollectionsPageProps> = ({
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
}) => {
  const [activeCollectionId, setActiveCollectionId] = useState<string>(COLLECTIONS[0].id);

  const activeCollection = COLLECTIONS.find((c) => c.id === activeCollectionId) || COLLECTIONS[0];
  const collectionProducts = PRODUCTS.filter((p) => activeCollection.productIds.includes(p.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#C25B34]">
          Thematic Narratives
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#241D1A]">
          Curated Collections
        </h1>
        <p className="text-xs sm:text-sm text-[#4D423D] leading-relaxed">
          Each collection is a cohesive chapter of Indian craft, curated around specific indigenous materials, traditional firing techniques, and sensorial living rituals.
        </p>
      </div>

      {/* Collection Tab Switchers */}
      <div className="flex items-center justify-start md:justify-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
        {COLLECTIONS.map((col) => {
          const isActive = col.id === activeCollectionId;
          return (
            <button
              key={col.id}
              onClick={() => setActiveCollectionId(col.id)}
              className={`px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-[#241D1A] text-white shadow-md'
                  : 'bg-white border border-[#D8CCBA] text-[#4D423D] hover:border-[#C25B34] hover:text-[#C25B34]'
              }`}
            >
              {col.title}
            </button>
          );
        })}
      </div>

      {/* Active Collection Feature Showcase */}
      <div className="bg-[#F4EFE6] rounded-3xl overflow-hidden border border-[#E8E0D2] shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Cover image */}
          <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto lg:h-[420px] bg-[#E8E0D2]">
            <img
              src={activeCollection.coverImage}
              alt={activeCollection.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/40 via-transparent to-transparent" />
          </div>

          {/* Editorial info */}
          <div className="lg:col-span-6 p-8 sm:p-12 space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#C25B34]">
              {activeCollection.tagline}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#241D1A]">
              {activeCollection.title}
            </h2>
            <p className="text-sm text-[#4D423D] leading-relaxed">
              {activeCollection.description}
            </p>

            {/* Material tags */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-[#7A6C65] block mb-2">
                Key Indigenous Materials:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeCollection.materials.map((m, idx) => (
                  <span
                    key={idx}
                    className="bg-white border border-[#D8CCBA] text-[#241D1A] text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products within this Collection */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#E8E0D2] pb-4">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#C25B34]" />
            <h3 className="font-serif text-xl font-semibold text-[#241D1A]">
              Artifacts in this Story ({collectionProducts.length})
            </h3>
          </div>
          <span className="text-xs text-[#7A6C65]">All pieces coordinate harmoniously in home spaces</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collectionProducts.map((product) => (
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
      </div>
    </div>
  );
};
