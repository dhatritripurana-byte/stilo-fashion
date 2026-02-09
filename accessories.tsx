import React from 'react';
import { ACCESSORIES } from '../constants';

const Accessories: React.FC = () => {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <span className="text-stone-400 uppercase tracking-widest text-xs">The Details</span>
        <h1 className="text-5xl font-serif mt-4">The Accessories Guide</h1>
        <p className="text-stone-500 mt-6 max-w-2xl mx-auto font-light leading-relaxed">
          Master the finishing touches. Accessories are the secret ingredient to turning an outfit into a "look."
        </p>
      </div>

      <div className="space-y-24">
        {ACCESSORIES.map((guide, i) => (
          <div key={i} className={`flex flex-col md:flex-row gap-16 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="w-full md:w-1/2 overflow-hidden">
              <img 
                src={guide.imageUrl} 
                alt={guide.category} 
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-8">
              <h2 className="text-4xl font-serif">{guide.category}</h2>
              <div className="space-y-6">
                {guide.tips.map((tip, idx) => (
                  <div key={idx} className="flex items-center gap-6 group">
                    <span className="text-stone-200 text-6xl font-serif leading-none group-hover:text-stone-300 transition-colors">
                      0{idx + 1}
                    </span>
                    <p className="text-stone-600 text-lg font-light leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-stone-50 p-12 rounded-sm border border-stone-100">
        <div>
          <h3 className="text-3xl font-serif mb-6">Minimal vs Bold</h3>
          <p className="text-stone-600 leading-relaxed mb-6 font-light">
            Choosing the right intensity is key. If your outfit has busy patterns, go for minimal, structural accessories. If you're wearing monochrome, let your jewelry and bags be the statement.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400" className="w-full h-48 object-cover mb-4 rounded-sm" />
              <p className="text-xs uppercase tracking-widest font-bold">Minimal</p>
            </div>
            <div className="text-center">
              <img src="https://images.unsplash.com/photo-1611085583191-a3b1a60d3c01?q=80&w=400" className="w-full h-48 object-cover mb-4 rounded-sm" />
              <p className="text-xs uppercase tracking-widest font-bold">Bold</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 border border-stone-200 shadow-sm flex flex-col items-center text-center">
          <span className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-stone-500 mb-6 italic font-serif">i</span>
          <h4 className="font-serif text-xl mb-4">Expert Tip</h4>
          <p className="text-stone-500 font-light italic">"Always take off the last thing you put on." - Coco Chanel</p>
          <p className="mt-4 text-xs text-stone-400">Moderation is often the key to sophisticated styling.</p>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
