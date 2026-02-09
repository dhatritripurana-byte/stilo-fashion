export interface ColorPalette {
  id: string;
  name: string;
  colors: string[];
  mood: 'Casual' | 'Elegant' | 'Trendy' | 'Professional';
  description: string;
  imageUrl: string;
}

export interface StylingItem {
  top: string;
  bottom: string;
  outerwear?: string;
  accessories: {
    jewelry: string;
    bag: string;
    footwear: string;
  };
  hair: string;
  occasion: string;
  imageUrl: string;
}

export interface AccessoryGuide {
  category: string;
  tips: string[];
  imageUrl: string;
}

export interface HairStyle {
  name: string;
  outfitMatch: string;
  occasion: string;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  imageUrl: string;
}
