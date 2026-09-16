import { Collection } from '../types';

export const COLLECTIONS: Collection[] = [
  {
    id: 'jaipur-sun-terracotta',
    title: 'The Jaipur Sun Terracotta Series',
    tagline: 'Raw, unglazed warmth inspired by Pink City architecture',
    description: 'An ode to the warm earthen hues of sun-baked Jaipur palaces. Crafted from mineral-rich local clays with tactile hand-ribbed textures that celebrate the honest beauty of unfinished soil.',
    coverImage: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#C25B34',
    productIds: ['mb-pottery-01', 'mb-pottery-02', 'mb-terra-01', 'mb-planter-01'],
    materials: ['Unglazed River Terracotta', 'Sun-cured Slip', 'Aravalli Silt']
  },
  {
    id: 'shaam-candle-sanctuary',
    title: 'The Shaam Candle Sanctuary',
    tagline: 'Soy wax candles poured in heirloom clay pots with Kannauj botanicals',
    description: 'When dusk settles over the desert, light our terracotta candles infused with rain-kissed earth, royal sandalwood, and fresh night-blooming jasmine. Once the candle is complete, the pot lives on as a planter.',
    coverImage: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#B88B4A',
    productIds: ['mb-candle-01', 'mb-candle-02', 'mb-candle-03', 'mb-hamper-02'],
    materials: ['100% Soy Wax', 'Kannauj Mitti Attar', 'Lead-Free Cotton Wick']
  },
  {
    id: 'monsoon-moonj-weave',
    title: 'Monsoon Moonj & Jute Grass Weaves',
    tagline: 'Naturally aromatic wild river grass storage and wall art',
    description: 'Hand-harvested along monsoon riverbeds by rural women artisans of Dausa. Each basket pairs time-honored coiling techniques with modern Scandinavian silhouettes for the mindful home.',
    coverImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#5C674E',
    productIds: ['mb-basket-01', 'mb-basket-02', 'mb-wall-02'],
    materials: ['River Moonj Grass', 'Natural Jute Cord', 'Plant Pigment Dyes']
  },
  {
    id: 'artisanal-dining-rituals',
    title: 'Tableware & Slow Dining Rituals',
    tagline: 'Everyday warmth for mindful meals and authentic chai moments',
    description: 'From the ergonomic grip of our glazed Mitti Kulhars to textured dinner platters speckled with iron oxides. Food-grade, microwave-safe, and rooted in tradition.',
    coverImage: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#7A6C65',
    productIds: ['mb-table-01', 'mb-table-02', 'mb-pottery-03'],
    materials: ['Lead-Free Ceramic Glaze', 'High-Fire Stoneware', 'Desert Sand Slip']
  },
  {
    id: 'curated-hampers',
    title: 'Artisan Gifting & Celebration Boxes',
    tagline: 'Memorable handmade gifts for weddings, housewarmings, and festivities',
    description: 'Bespoke gift crates packed with artisanal pottery, soy candles, and handmade paper notes, lovingly nestled in handwoven baskets. Perfect for modern gifting with a soulful story.',
    coverImage: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#A84924',
    productIds: ['mb-hamper-01', 'mb-hamper-02'],
    materials: ['Woven Reed Crates', 'Hand-stamped Seed Paper', 'Organic Cotton Ribbons']
  }
];

export const TESTIMONIALS = [
  {
    id: 't-1',
    author: 'Aanya Sharma',
    role: 'Interior Architect',
    location: 'Bandra, Mumbai',
    text: 'I sourced the Aravalli amphora vases and custom planters for a high-end residential project in Mumbai. The organic warmth and tactile texture of Mitti & Bloom clay pieces bring an earthy soul into modern minimalist spaces that mass-produced décor never could.',
    productName: 'Aravalli Amphora Vase',
    rating: 5,
    verified: true
  },
  {
    id: 't-2',
    author: 'Devendra Singhania',
    role: 'Design Director',
    location: 'Indiranagar, Bengaluru',
    text: 'The Mitti ki Khushboo candle is pure magic. It smells exactly like that first rain hitting dry Rajasthan soil in June. Plus, when the candle was finished, we planted a baby jade succulent in the terracotta pot. Incredible brand philosophy!',
    productName: 'Mitti ki Khushboo (Petrichor)',
    rating: 5,
    verified: true
  },
  {
    id: 't-3',
    author: 'Pooja & Rohan Mehta',
    role: 'New Homeowners',
    location: 'Vasant Vihar, New Delhi',
    text: 'We received The Jaipur Welcome Gift Crate as a housewarming present from close friends. The kulhars make our evening chai feel like a peaceful temple ritual. The craftsmanship and plastic-free packaging are truly commendable.',
    productName: 'The Jaipur Welcome Gift Crate',
    rating: 5,
    verified: true
  }
];
