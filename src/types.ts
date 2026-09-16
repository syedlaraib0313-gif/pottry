export type Page = 'home' | 'about' | 'shop' | 'collections' | 'artisans' | 'custom' | 'contact';

export type ProductCategory =
  | 'all'
  | 'pottery'
  | 'terracotta'
  | 'candles'
  | 'planters'
  | 'baskets'
  | 'wall-decor'
  | 'tableware'
  | 'gift-hampers';

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: ProductCategory;
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  secondaryImage?: string;
  isBestseller?: boolean;
  isNewArrival?: boolean;
  description: string;
  dimensions: string;
  material: string;
  artisanName: string;
  artisanLocation: string;
  careInstructions: string;
  tags: string[];
}

export interface Artisan {
  id: string;
  name: string;
  title: string;
  location: string;
  experienceYears: number;
  craft: string;
  image: string;
  quote: string;
  bio: string;
  specialityProducts: string[];
}

export interface Collection {
  id: string;
  title: string;
  tagline: string;
  description: string;
  coverImage: string;
  accentColor: string;
  productIds: string[];
  materials: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColorOrSize?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  location: string;
  text: string;
  productName: string;
  rating: number;
  verified: boolean;
}
