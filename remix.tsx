import React from 'react';

const Remix: React.FC = () => {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <span className="text-stone-400 uppercase tracking-widest text-xs">Sustainability</span>
        <h1 className="text-5xl font-serif mt-4">One Piece, Three Ways</h1>
        <p className="text-stone-500 mt-6 max-w-2xl mx-auto font-light leading-relaxed">
          Master the art of versatile styling. See how changing your accessories and hair transforms a simple staple into multiple outfits.
        </p>
      </div>

      {/* Main Feature: The White Button Down */}
      <div className="space-y-16">
        <div className="bg-stone-50 p-12 flex flex-col items-center border border-stone-100 rounded-sm">
          <div className="max-w-sm mb-12">
            <img 
              src="https://images.unsplash.com/photo-1598033129183-c4f50c7176c8?q=80&w=600" 
              alt="White Shirt" 
              className="w-full aspect-square object-cover shadow-lg rounded-sm"
            />
            <div className="text-center mt-6">
              <h2 className="text-2xl font-serif italic">The Hero: White Crisp Shirt</h2>
              <p className="text-stone-400 text-sm uppercase tracking-widest mt-2">Versatility Rating: 10/10</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {[
              { 
                style: 'The Professional', 
                detail: 'Tucked into tailored trousers', 
                acc: 'Leather loafers & Tote bag', 
                hair: 'Low sleek bun',
                img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=400'
              },
              { 
                style: 'The Casual Chic', 
                detail: 'Half-tucked over denim shorts', 
                acc: 'Canvas sneakers & Sun hat', 
                hair: 'Messy ponytail',
                img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=400'
              },
              { 
                style: 'The Evening Twist', 
                detail: 'Knotted over a silk midi skirt', 
                acc: 'Strappy heels & Bold earrings', 
                hair: 'Hollywood waves',
                img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=400'
              }
            ].map((v, i) => (
              <div key={i} className="bg-white p-6 shadow-sm border border-stone-100 flex flex-col">
                <img src={v.img} alt={v.style} className="w-full aspect-[4/5] object-cover mb-6" />
                <h3 className="font-serif text-xl mb-3">{v.style}</h3>
                <div className="space-y-3 mt-auto">
                  <p className="text-xs text-stone-500 font-medium uppercase tracking-tighter">Coordination:</p>
                  <p className="text-sm text-stone-600">👗 {v.detail}</p>
                  <p className="text-sm text-stone-600">👜 {v.acc}</p>
                  <p className="text-sm text-stone-600">💇 {v.hair}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          <div className="bg-stone-900 text-stone-300 p-12 rounded-sm">
            <h3 className="text-white text-3xl font-serif mb-6">Styling Tips</h3>
            <ul className="space-y-4 font-light">
              <li className="flex gap-4">
                <span className="text-stone-500">•</span>
                <span>Change the texture of your accessories to change the vibe (leather for formal, straw for casual).</span>
              </li>
              <li className="flex gap-4">
                <span className="text-stone-500">•</span>
                <span>The neckline of your base piece determines your hair height—show off details by lifting your hair.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-stone-500">•</span>
                <span>Roll your sleeves or knot your hem to instantly alter the silhouette of oversized clothes.</span>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center p-12 border-2 border-dashed border-stone-200 rounded-sm">
            <div className="text-center">
              <h3 className="text-2xl font-serif mb-4">What's in your closet?</h3>
              <p className="text-stone-500 mb-8 max-w-xs">Send us a photo of a piece you find hard to style, and let our guide inspire you.</p>
              <button className="bg-stone-100 text-stone-900 px-8 py-3 rounded-full text-sm font-medium hover:bg-stone-200 transition-colors uppercase tracking-widest">
                Upload My Piece
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Remix;
