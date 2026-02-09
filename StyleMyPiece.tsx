import React, { useState, useRef } from 'react';
import { GoogleGenAI, Type } from "@google/genai";

interface StylingResponse {
  vibe: string;
  colorAnalysis: string;
  suggestedAccessories: {
    jewelry: string;
    bag: string;
    footwear: string;
  };
  hairStyling: string;
  occasionAdvice: string;
}

const StyleMyPiece: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<StylingResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      // Fix: Removed incorrect onloadend callback that was trying to cast void return of readAsDataURL to string.
      // Use reader.onload to correctly access the base64 result from reader.result.
      reader.onload = () => {
        setImage(reader.result as string);
        setResult(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeOutfit = async () => {
    if (!image) return;

    setLoading(true);
    setError(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const base64Data = image.split(',')[1];

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          {
            parts: [
              {
                inlineData: {
                  data: base64Data,
                  mimeType: 'image/jpeg',
                },
              },
              {
                text: "Analyze this clothing item or outfit and provide complete styling guidance. This user is from India, so strictly consider Indian traditional (Saree, Kurta, Sherwani, Lehenga), fusion (Kurti-Jeans), and western wear styles for all genders (Men and Women). Focus on budget-friendly ideas, using common existing wardrobe items, and daily wear/festive practicality. Include suggestions for Indian-specific accessories (e.g., Jhumkas, Juttis, Dupattas, Safas, Pocket Squares) where appropriate. Return the response in a structured JSON format.",
              },
            ],
          },
        ],
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              vibe: { type: Type.STRING, description: "The overall aesthetic vibe of the piece (e.g., Festive Ethnic, Indo-Western, Boho Fusion)." },
              colorAnalysis: { type: Type.STRING, description: "Color matching for Indian skin tones and palette analysis." },
              suggestedAccessories: {
                type: Type.OBJECT,
                properties: {
                  jewelry: { type: Type.STRING, description: "Specific jewelry like Jhumkas, necklaces, or men's watches/pocket squares." },
                  bag: { type: Type.STRING, description: "Bags like Potlis, Clutches, or Messengers." },
                  footwear: { type: Type.STRING, description: "Footwear like Juttis, Kolhapuris, Loafers or Heels." },
                },
                required: ["jewelry", "bag", "footwear"],
              },
              hairStyling: { type: Type.STRING, description: "Recommended hairstyle (e.g., Bun with Gajra, Textured Quiff, Braids)." },
              occasionAdvice: { type: Type.STRING, description: "Where to wear this (Sangeet, Office, Diwali Party) and how to transition it." },
            },
            required: ["vibe", "colorAnalysis", "suggestedAccessories", "hairStyling", "occasionAdvice"],
          },
        },
      });

      const data = JSON.parse(response.text || "{}");
      setResult(data);
    } catch (err) {
      console.error(err);
      setError("Failed to style your piece. Please try a different image or try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto min-h-screen animate-in fade-in duration-500">
      <div className="text-center mb-16">
        <span className="inline-block bg-orange-600 text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1 mb-4">Desi Style Lab</span>
        <h1 className="text-5xl md:text-7xl font-serif font-black mb-6">Style My Indian Look</h1>
        <p className="text-stone-600 max-w-3xl mx-auto font-bold leading-relaxed text-xl">
          Whether it's a Saree, a Kurta, or your favorite Fusion piece—post a photo and let our AI curate your accessories and hair.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Upload Column */}
        <div className="space-y-8">
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="aspect-[4/5] bg-stone-100 border-4 border-dashed border-stone-300 flex flex-col items-center justify-center cursor-pointer hover:bg-stone-200 transition-colors relative overflow-hidden group rounded-sm shadow-inner"
          >
            {image ? (
              <>
                <img src={image} alt="Preview" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white font-black uppercase tracking-widest text-sm">Update Photo</p>
                </div>
              </>
            ) : (
              <div className="text-center p-8">
                <svg className="w-20 h-20 mx-auto mb-6 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-stone-500 font-black uppercase tracking-widest text-sm">Snap your outfit</p>
                <p className="text-stone-400 mt-2 text-xs uppercase font-bold tracking-tighter">Traditional • Fusion • Western</p>
              </div>
            )}
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleImageUpload} 
              className="hidden" 
              accept="image/*" 
            />
          </div>

          <button
            onClick={analyzeOutfit}
            disabled={!image || loading}
            className={`w-full py-6 text-sm font-black uppercase tracking-[0.3em] transition-all shadow-2xl rounded-sm ${
              !image || loading ? 'bg-stone-200 text-stone-400 cursor-not-allowed' : 'bg-orange-600 text-white hover:bg-orange-700'
            }`}
          >
            {loading ? 'Consulting Our Stylists...' : 'Get Desi Styling Suggestions'}
          </button>

          {error && (
            <div className="p-4 bg-red-50 text-red-700 font-bold text-xs uppercase tracking-widest border border-red-100 rounded-sm">
              {error}
            </div>
          )}
        </div>

        {/* Results Column */}
        <div className="space-y-8">
          {loading ? (
            <div className="animate-pulse space-y-10 p-12 bg-white border border-stone-200 rounded-sm shadow-xl">
              <div className="h-4 bg-stone-100 w-1/4 mb-2"></div>
              <div className="h-12 bg-stone-100 w-3/4"></div>
              <div className="space-y-4 pt-6">
                <div className="h-4 bg-stone-100 w-full"></div>
                <div className="h-4 bg-stone-100 w-full"></div>
                <div className="h-4 bg-stone-100 w-2/3"></div>
              </div>
              <div className="h-40 bg-stone-50 w-full"></div>
              <p className="text-center text-xs font-black text-orange-600 uppercase tracking-widest italic animate-bounce">
                Pairing your piece with traditional gems...
              </p>
            </div>
          ) : result ? (
            <div className="bg-white border border-stone-200 shadow-2xl p-10 space-y-12 rounded-sm animate-in slide-in-from-right-8 duration-700">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-orange-600 mb-2 block">Style Aesthetic</span>
                <h2 className="text-5xl font-serif font-black">{result.vibe}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-widest text-stone-900 border-b-4 border-orange-600 pb-2 inline-block">Skin Tone & Colors</h3>
                  <p className="text-sm font-bold text-stone-700 leading-relaxed">{result.colorAnalysis}</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-widest text-stone-900 border-b-4 border-orange-600 pb-2 inline-block">Where to Wear</h3>
                  <p className="text-sm font-bold text-stone-700 leading-relaxed">{result.occasionAdvice}</p>
                </div>
              </div>

              <div className="bg-stone-50 p-10 space-y-8 rounded-sm border border-stone-100">
                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-stone-400 text-center">Desi Accessory Guide</h3>
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-2 border-b border-stone-200 pb-5">
                    <span className="text-[10px] font-black uppercase text-stone-500 tracking-widest">Jewelry Essentials</span>
                    <span className="text-base font-black text-stone-900">{result.suggestedAccessories.jewelry}</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-2 border-b border-stone-200 pb-5">
                    <span className="text-[10px] font-black uppercase text-stone-500 tracking-widest">Potli / Clutch / Bag</span>
                    <span className="text-base font-black text-stone-900">{result.suggestedAccessories.bag}</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-2 border-b border-stone-200 pb-5">
                    <span className="text-[10px] font-black uppercase text-stone-500 tracking-widest">Juttis / Kolhapuris</span>
                    <span className="text-base font-black text-stone-900">{result.suggestedAccessories.footwear}</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50/50 border-l-8 border-orange-600 pl-8 py-6">
                <h3 className="text-xs font-black uppercase tracking-widest text-orange-700 mb-3">Hairstyle Finish</h3>
                <p className="text-2xl font-serif font-black text-stone-900 italic">"{result.hairStyling}"</p>
              </div>

              <div className="pt-8 border-t border-stone-100">
                <p className="text-[10px] font-black text-stone-400 uppercase tracking-[0.3em] text-center leading-loose">
                  Styling curated for Indian Wardrobes • Budget-Friendly Suggestions
                </p>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-16 border-4 border-dashed border-stone-200 rounded-sm bg-stone-50/30">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mb-8">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-3xl font-serif font-black mb-4">Post Your Outfit</h3>
              <p className="text-stone-500 font-bold max-w-sm text-base uppercase tracking-wider leading-relaxed">
                Upload your Kurta, Saree, Sherwani or Fusion piece for complete Men's and Women's Indian styling advice.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StyleMyPiece;
