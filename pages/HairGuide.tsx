import React from 'react';
import { HAIRSTYLES } from '../constants';

const HairGuide: React.FC = () => {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <span className="text-stone-400 uppercase tracking-widest text-xs">Final Polish</span>
        <h1 className="text-5xl font-serif mt-4">The Hair Styling Guide</h1>
        <p className="text-stone-500 mt-6 max-w-2xl mx-auto font-light leading-relaxed">
          Your hair completes the silhouette. Discover which styles harmonize with your outfit's neckline and the occasion's formality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {HAIRSTYLES.map((hair, i) => (
          <div key={i} className="flex flex-col bg-white border border-stone-100 p-2 shadow-sm rounded-sm overflow-hidden group">
            <div className="relative overflow-hidden aspect-square">
              <img 
                src={hair.imageUrl} 
                alt={hair.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute top-4 right-4">
                <span className={`px-2 py-1 text-[10px] uppercase tracking-widest rounded-sm ${
                  hair.difficulty === 'Easy' ? 'bg-emerald-50 text-emerald-600' : 'bg-orange-50 text-orange-600'
                }`}>
                  {hair.difficulty}
                </span>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-serif">{hair.name}</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-xs border-b border-stone-50 pb-2">
                  <span className="text-stone-400 uppercase tracking-tighter">Pair with:</span>
                  <span className="text-stone-800 font-medium">{hair.outfitMatch}</span>
                </div>
                <div className="flex justify-between text-xs border-b border-stone-50 pb-2">
                  <span className="text-stone-400 uppercase tracking-tighter">Occasion:</span>
                  <span className="text-stone-800 font-medium">{hair.occasion}</span>
                </div>
              </div>
              <button className="w-full py-3 bg-stone-900 text-white text-xs uppercase tracking-widest hover:bg-stone-800 transition-colors">
                View Tutorial
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-serif mb-8">Matching Hair to Necklines</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { n: 'V-Neck', h: 'Down & Soft Waves' },
            { n: 'Turtleneck', h: 'High Ponytail' },
            { n: 'Off-Shoulder', h: 'Side Braid' },
            { n: 'Crew Neck', h: 'Top Knot' }
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-stone-50 border border-stone-100">
              <p className="text-xs uppercase tracking-widest text-stone-400 mb-2 font-bold">{item.n}</p>
              <p className="font-serif text-lg">{item.h}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HairGuide;
