import { Artisan } from '../types';

export const ARTISANS: Artisan[] = [
  {
    id: 'artisan-ramu',
    name: 'Ramu Kumhar',
    title: '5th Generation Master Potter',
    location: 'Sanganer, Jaipur, Rajasthan',
    experienceYears: 38,
    craft: 'Wheel-thrown pottery & sculptural earthen amphoras',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    quote: 'Clay is not dead soil; it listens to your fingers and the beat of your breath. When the wheel spins, time in Jaipur stands still.',
    bio: 'Ramu Ji learned pottery from his grandfather on a stone wheel turned by a wooden stick in Sanganer. Today, with Mitti & Bloom, he translates ancestral terracotta shaping techniques into refined silhouettes for modern architectural homes while mentoring younger apprentices.',
    specialityProducts: ['Aravalli Amphora Vase', 'Kumbha Fluted Planter', 'Sands of Thar Dinner Plates']
  },
  {
    id: 'artisan-kailashi',
    name: 'Kailashi Bai',
    title: 'Lead Weaver & Women’s Collective Mentor',
    location: 'Dausa Rural Cluster, Rajasthan',
    experienceYears: 24,
    craft: 'Wild river moonj reed & natural fiber basketry',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    quote: 'We gather reeds when the monsoon winds recede. Every twist of grass is a song passed from mothers to daughters for generations.',
    bio: 'Leading a cooperative of 26 rural women artisans, Kailashi Bai champions financial independence through heritage craft. Her intricate coiling technique creates sturdy, tactile storage baskets and decorative wall hangings without synthetic chemicals.',
    specialityProducts: ['Chambal Moonj Basket', 'Ahavah Woven Trio', 'Kair Serving Basket']
  },
  {
    id: 'artisan-govind',
    name: 'Govind Ram Prajapati',
    title: 'Terracotta Sculptor & Kiln Master',
    location: 'Ramgarh, Rajasthan',
    experienceYears: 31,
    craft: 'Architectural terracotta, temple bells & pierced jaali carving',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    quote: 'The fire in the kiln is honest. If your clay mix has air or insincerity, the fire will reveal it. True craftsmanship requires devotion.',
    bio: 'Renowned throughout the Jaipur craft circuit for his precision in pierced cut-work (jaali), Govind Ji creates heirloom chiming bells and perforated decorative wall art that capture the poetic shadows of Rajasthani palace windows.',
    specialityProducts: ['Surya Arch Wall Chiming Bell', 'Jaali Mandana Wall Plate', 'Custom Architectural Plaques']
  },
  {
    id: 'artisan-sunita',
    name: 'Sunita Meena',
    title: 'Aroma Alchemist & Candle Atelier Lead',
    location: 'C-Scheme Studio, Jaipur, Rajasthan',
    experienceYears: 12,
    craft: 'Botanical candle blending & Kannauj attar infusion',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    quote: 'In India, scent has always been spiritual. By pouring clean soy wax directly into our artisans’ terracotta pots, we give earth its rightful perfume.',
    bio: 'Sunita combines a formal chemistry background with deep reverence for indigenous botanicals. She works closely with heritage distillers in Kannauj to capture authentic baked earth (Mitti attar), vetiver, and royal chandan.',
    specialityProducts: ['Mitti ki Khushboo (Petrichor)', 'Jaipur Shaam Candle', 'Mogra & Dew Blossom Candle']
  }
];

export const ARTISAN_IMPACT_STATS = [
  { value: '48+', label: 'Artisan Families Supported', detail: 'Across 4 rural Rajasthani clusters' },
  { value: '100%', label: 'Direct & Fair Trade Wages', detail: 'Paid well above regional artisanal benchmarks' },
  { value: 'Zero', label: 'Synthetic Chemicals & Plastics', detail: 'Natural clays, vegetable dyes & honeycomb wrap' },
  { value: '14', label: 'Women-Led Craft Fellowships', detail: 'Equipping rural craftswomen with business literacy' }
];
