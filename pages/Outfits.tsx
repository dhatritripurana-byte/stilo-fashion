import React, { useState } from 'react';
import { OUTFITS } from '../constants';
import { GoogleGenAI } from "@google/genai";

const Outfits: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Traditional' | 'Modern' | 'Fusion'>('All');
  const [visualizingIndices, setVisualizingIndices] = useState<Set<number>>(new Set());
  const [generatedVisuals, setGeneratedVisuals] = useState<Record<number, string>>({});

  const filteredOutfits = filter === 'All' 
    ? OUTFITS 
    : OUTFITS.filter(o => o.occasion.includes(filter));

  const generateVisual = async (outfit: typeof OUTFITS[0], index: number) => {
    if (visualizingIndices.has(index)) return;

    setVisualizingIndices(prev => new Set(prev).add(index));
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Realistic high-end fashion photography of an Indian model wearing: ${outfit.top} with ${outfit.bottom}. 
      Accessories: ${outfit.accessories.jewelry}, ${outfit.accessories.bag !== 'N/A' ? outfit.accessories.bag : 'minimalist styling'}, and ${outfit.accessories.footwear}. 
      Hairstyle: ${outfit.hair}. 
      Setting: Sophisticated background suitable for ${outfit.occasion}. 
      Style: Editorial, 8k resolution, cinematic lighting, professional color grading, realistic textures.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: prompt }],
        },
        config: {
          imageConfig: {
            aspectRatio: "3:4"
          }
        }
      });

      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64Data = part.inlineData.data;
          const imageUrl = `data:image/png;base64,${base64Data}`;
          setGeneratedVisuals(prev => ({ ...prev, [index]: imageUrl }));
        }
      }
    } catch (error) {
      console.error("Image generation failed:", error);
      alert("Style visualization is currently unavailable. Please try again later.");
    } finally {
      setVisualizingIndices(prev => {
        const next = new Set(prev);
        next.delete(index);
        return next;
      });
    }
  };

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-orange-600 uppercase tracking-widest text-xs font-black">Curated Lookbook</span>
        <h1 className="text-5xl md:text-7xl font-serif mt-4 font-black">Men & Women: Complete Looks</h1>
        <p className="text-stone-500 mt-6 max-w-2xl mx-auto font-bold leading-relaxed">
          From the elegance of Banarasi silks to the sharp lines of modern linen—find your next complete ensemble here.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-20">
        {['All', 'Traditional', 'Modern', 'Fusion'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f as any)}
            className={`px-8 py-3 text-xs font-black uppercase tracking-widest transition-all rounded-sm border-2 ${
              filter === f ? 'bg-stone-900 text-white border-stone-900' : 'bg-transparent text-stone-400 border-stone-200 hover:border-stone-400'
            }`}
          >
            {f} Styles
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
        {filteredOutfits.map((outfit, i) => {
          const isVisualizing = visualizingIndices.has(i);
          const hasVisual = generatedVisuals[i];

          return (
            <div key={i} className="group animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="overflow-hidden mb-8 aspect-[3/4] relative shadow-2xl border-4 border-white">
                <img 
                  src={hasVisual || outfit.imageUrl} 
                  alt={outfit.top} 
                  className={`w-full h-full object-cover transition-all duration-1000 ${isVisualizing ? 'opacity-50 blur-sm' : 'group-hover:scale-110'}`} 
                />
                
                {isVisualizing && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
                    <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mb-4"></div>
                    <p className="text-white text-[10px] font-black uppercase tracking-widest text-shadow-bold">Generating AI Look...</p>
                  </div>
                )}

                <div className="absolute top-4 left-4">
                  <span className="bg-stone-900/90 backdrop-blur-sm text-white px-4 py-1 text-[10px] font-black uppercase tracking-widest">
                    {outfit.occasion}
                  </span>
                </div>

                {hasVisual && (
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-orange-600 text-white px-3 py-1 text-[8px] font-black uppercase tracking-widest rounded-full">
                      AI Visualized
                    </span>
                  </div>
                )}
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-3xl font-serif mb-2 font-black leading-tight">{outfit.top}</h3>
                    <p className="text-stone-500 text-sm font-bold italic">
                      Pair with: <span className="text-stone-900">{outfit.bottom}</span>
                    </p>
                  </div>
                  <button 
                    onClick={() => generateVisual(outfit, i)}
                    disabled={isVisualizing}
                    className="flex-shrink-0 w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all shadow-md group/btn"
                    title="Visualize with AI"
                  >
                    <svg className={`w-5 h-5 ${isVisualizing ? 'animate-pulse' : 'group-hover/btn:scale-125'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
                    </svg>
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-4 bg-white p-8 rounded-sm border-2 border-stone-100 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-2 h-2 rounded-full bg-orange-600 flex-shrink-0"></div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-1 font-black">Accessories</p>
                      <p className="text-sm text-stone-800 leading-relaxed font-bold">
                        {outfit.accessories.jewelry}, {outfit.accessories.bag !== 'N/A' ? outfit.accessories.bag + ',' : ''} {outfit.accessories.footwear}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-2 h-2 rounded-full bg-orange-600 flex-shrink-0"></div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-1 font-black">Hair Styling</p>
                      <p className="text-sm text-stone-800 leading-relaxed font-bold">{outfit.hair}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-32 p-16 bg-stone-900 text-white text-center rounded-sm">
        <h2 className="text-4xl font-serif font-black mb-6 italic">"Elegance is not about being noticed, it's about being remembered."</h2>
        <p className="text-stone-400 font-bold tracking-widest uppercase text-xs">Styles Curated for the Modern Indian Closet</p>
      </div>
    </div>
  );
};

export default Outfits;
