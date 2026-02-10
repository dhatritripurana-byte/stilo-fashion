import React from 'react';
import { PALETTES } from '../constants';

const Palettes: React.FC = () => {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto animate-in slide-in-from-bottom-4 duration-700">
      <div className="text-center mb-20">
        <span className="text-stone-400 uppercase tracking-widest text-xs">Vibe & Hue</span>
        <h1 className="text-5xl font-serif mt-4">Curated Color Palettes</h1>
        <p className="text-stone-500 mt-6 max-w-2xl mx-auto font-light leading-relaxed">
          The foundation of any great look is a harmonious color story. 
          Discover our signature palettes designed for every mood and season.
        </p>
      </div>

      <div className="space-y-32">
        {PALETTES.map((palette, index) => (
          <div key={palette.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="w-full md:w-1/2">
              <img src={palette.imageUrl} alt={palette.name} className="w-full aspect-[4/5] object-cover shadow-xl" />
            </div>
            <div className="w-full md:w-1/2 space-y-8">
              <div>
                <span className="inline-block px-3 py-1 bg-stone-100 text-stone-600 text-xs uppercase tracking-widest rounded-full mb-4">
                  {palette.mood}
                </span>
                <h2 className="text-4xl font-serif">{palette.name}</h2>
              </div>
              <p className="text-stone-600 leading-relaxed text-lg font-light italic">
                "{palette.description}"
              </p>
              
              <div className="space-y-4">
                <h4 className="text-sm font-medium uppercase tracking-wider text-stone-900">Palette Swatches</h4>
                <div className="flex gap-4">
                  {palette.colors.map((color, i) => (
                    <div key={i} className="group relative">
                      <div 
                        className="w-12 h-12 rounded-full border border-stone-100 shadow-sm"
                        style={{ backgroundColor: color }}
                      />
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        {color}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <button className="text-stone-900 border-b border-stone-900 pb-2 text-sm uppercase tracking-widest hover:text-stone-500 hover:border-stone-500 transition-colors">
                  View Outfit Gallery
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Palettes;
