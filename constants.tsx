import { ColorPalette, StylingItem, AccessoryGuide, HairStyle } from './types';

export const PALETTES: ColorPalette[] = [
  {
    id: 'jewel',
    name: 'Royal Jewel Tones',
    colors: ['#800020', '#004953', '#4B0082', '#DAA520'],
    mood: 'Elegant',
    description: 'Deep rubies, emeralds, and teals inspired by Indian royalty. Perfect for festive celebrations and weddings.',
    imageUrl: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=800'
  },
  {
    id: 'marigold',
    name: 'Festive Marigold',
    colors: ['#FF8C00', '#FFD700', '#E32636', '#FFBF00'],
    mood: 'Trendy',
    description: 'Vibrant yellows and oranges echoing the marigold flowers of Indian festivals. Full of energy and tradition.',
    imageUrl: 'https://images.unsplash.com/photo-1610189012906-40742d4a2754?q=80&w=800'
  },
  {
    id: 'indigo-fusion',
    name: 'Indigo & Earth',
    colors: ['#00416A', '#E1D9D1', '#CD7F32', '#F5F5DC'],
    mood: 'Casual',
    description: 'The deep blue of Indigo dyes paired with desert sands. Perfect for modern fusion and everyday office wear.',
    imageUrl: 'https://images.unsplash.com/photo-1595053801931-155e8c18c281?q=80&w=800'
  }
];

export const OUTFITS: StylingItem[] = [
  // WOMEN TRADITIONAL
  {
    top: 'Classic Banarasi Silk Saree',
    bottom: 'Gold Brocade Blouse',
    accessories: {
      jewelry: 'Temple Gold Necklace & Jhumkas',
      bag: 'Silk Potli with Beadwork',
      footwear: 'Gold Wedding Heels'
    },
    hair: 'Traditional Bun with Fresh Jasmine',
    occasion: 'Wedding / Festive',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600'
  },
  // MEN TRADITIONAL
  {
    top: 'Ivory Embroidered Sherwani',
    bottom: 'Churidar Pyjama & Maroon Stole',
    accessories: {
      jewelry: 'Pearl Mala & Brooch',
      bag: 'N/A',
      footwear: 'Maroon Velvet Mojaris'
    },
    hair: 'Clean Textured Quiff',
    occasion: 'Groom / Traditional Ceremony',
    imageUrl: 'https://images.unsplash.com/photo-1597935258735-e254c1839188?q=80&w=600'
  },
  // WOMEN MODERN
  {
    top: 'Tailored Linen Blazer',
    bottom: 'Wide-leg Cotton Trousers',
    accessories: {
      jewelry: 'Minimalist Geometric Studs',
      bag: 'Structured Leather Tote',
      footwear: 'Tan Pointed Flats'
    },
    hair: 'Sleek Center-Parted Straight Hair',
    occasion: 'Modern Office / Daily Wear',
    imageUrl: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=600'
  },
  // MEN MODERN
  {
    top: 'Sky Blue Linen Shirt',
    bottom: 'Beige Cotton Chinos',
    accessories: {
      jewelry: 'Leather Strap Watch',
      bag: 'Canvas Messenger Bag',
      footwear: 'White Minimal Sneakers'
    },
    hair: 'Messy Side Sweep',
    occasion: 'Casual Brunch / Daily Wear',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600'
  },
  // WOMEN FUSION
  {
    top: 'White Chikankari Short Kurti',
    bottom: 'Ripped Blue Boyfried Jeans',
    accessories: {
      jewelry: 'Oxidized Silver Nose Ring & Bangles',
      bag: 'Ethnic Patchwork Sling',
      footwear: 'Leather Kolhapuri Chappals'
    },
    hair: 'Half-Up Boho Braid',
    occasion: 'Fusion / College Daily Wear',
    imageUrl: 'https://images.unsplash.com/photo-1627440301191-0d67c14457e3?q=80&w=600'
  },
  // MEN FUSION
  {
    top: 'Navy Bandhgala Vest',
    bottom: 'White Formal Shirt & Dark Trousers',
    accessories: {
      jewelry: 'Silver Lapel Pin',
      bag: 'N/A',
      footwear: 'Black Leather Monks'
    },
    hair: 'Classic Side Part',
    occasion: 'Fusion / Semi-Formal Event',
    imageUrl: 'https://images.unsplash.com/photo-1617130863154-964ff3e44584?q=80&w=600'
  }
];

export const ACCESSORIES: AccessoryGuide[] = [
  {
    category: 'The Desi Accessory Edit',
    tips: [
      'Men: A well-fitted Safa or Pocket Square can transform a basic Nehru jacket into royal attire.',
      'Women: Mix your Western pieces with Jhumkas for an instant Indo-western vibe.',
      'Daily Wear: Stick to oxidized silver or leather cords for a budget-friendly, rugged look.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=600'
  }
];

export const HAIRSTYLES: HairStyle[] = [
  {
    name: 'The Traditional Gola Bun',
    outfitMatch: 'Sarees, Traditional Silks',
    occasion: 'Wedding Guest / Puja',
    difficulty: 'Medium',
    imageUrl: 'https://images.unsplash.com/photo-1617922001439-4a2e6562f328?q=80&w=600'
  },
  {
    name: 'Sleek Low Fade',
    outfitMatch: 'Sherwanis, Suits, Casual Tees',
    occasion: 'All Occasions',
    difficulty: 'Easy',
    imageUrl: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=600'
  }
];
