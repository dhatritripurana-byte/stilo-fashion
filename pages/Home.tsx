import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=2070" 
          alt="Indian Fashion Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <span className="text-white uppercase tracking-[0.4em] text-xs font-black mb-6 block bg-orange-600/60 backdrop-blur-md inline-block px-4 py-1">Modern Indian Style</span>
            <h1 className="text-white text-5xl md:text-8xl font-serif mb-8 leading-tight font-black">Ethnic, Fusion & Everyday Styling</h1>
            <p className="text-white text-lg md:text-2xl mb-10 font-black leading-relaxed">
              Complete guidance for Men and Women. Style your existing wardrobe from Chikankari fusion to festive Silk Sarees and Bandhgalas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/style-me" 
                className="inline-block bg-white text-stone-900 px-10 py-4 font-black hover:bg-stone-100 transition-all uppercase tracking-widest text-sm shadow-xl"
              >
                Style My Piece
              </Link>
              <Link 
                to="/palettes" 
                className="inline-block bg-stone-900/40 backdrop-blur-sm border-2 border-white text-white px-10 py-4 font-black hover:bg-white hover:text-stone-900 transition-all uppercase tracking-widest text-sm shadow-xl"
              >
                Indian Jewel Palettes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* New Label Highlights Section */}
      <section className="py-12 bg-stone-100 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-orange-600"></div>
            <span className="text-xs font-black uppercase tracking-[0.2em]">Festive & Wedding Ready</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-orange-600"></div>
            <span className="text-xs font-black uppercase tracking-[0.2em]">Men's & Women's Ethnic</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-orange-600"></div>
            <span className="text-xs font-black uppercase tracking-[0.2em]">Budget Fusion Hacks</span>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-4 bg-[#fdfaf7]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-serif mb-8 font-black leading-tight">Celebrating Indian Heritage & Daily Wear</h2>
            <div className="space-y-10">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-stone-900 text-white flex items-center justify-center font-serif text-2xl font-black shadow-lg">1</div>
                <div>
                  <h3 className="font-black text-xl mb-2 uppercase tracking-wide">Ethnic Color Stories</h3>
                  <p className="text-stone-800 leading-relaxed font-bold">From subtle linen khadis to the vibrance of Holi and Diwali, learn to layer Indian colors using what's already in your trunk.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-stone-900 text-white flex items-center justify-center font-serif text-2xl font-black shadow-lg">2</div>
                <div>
                  <h3 className="font-black text-xl mb-2 uppercase tracking-wide">Jewelry & Juttis</h3>
                  <p className="text-stone-800 leading-relaxed font-bold">Accessorizing for the Indian silhouette—oxidized silver for fusion, Kundan for tradition, and Juttis that go with everything.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-stone-900 text-white flex items-center justify-center font-serif text-2xl font-black shadow-lg">3</div>
                <div>
                  <h3 className="font-black text-xl mb-2 uppercase tracking-wide">Gender-Neutral Guidance</h3>
                  <p className="text-stone-800 leading-relaxed font-bold">Inclusive styling whether you're draping a Saree or tailoring a Bandhgalas. We have styling maps for every Indian wardrobe.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1595053801931-155e8c18c281?q=80&w=800" 
              alt="Indian Textile" 
              className="rounded-sm shadow-2xl relative z-10 border-8 border-white"
            />
            <div className="absolute -bottom-10 -left-10 w-64 h-80 bg-orange-100 -z-0"></div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-serif font-black">Ethnic & Fusion Collections</h2>
          <div className="w-24 h-1.5 bg-orange-600 mx-auto mt-6"></div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'AI Styling Lab', link: '/style-me', img: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=600', label: 'INDIAN FUSION' },
            { title: 'Traditional Outfits', link: '/outfits', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600', label: 'FOR ALL GENDERS' },
            { title: 'Men\'s Styling', link: '/outfits', img: 'https://images.unsplash.com/photo-1617130863154-964ff3e44584?q=80&w=600', label: 'SHARP ETHNIC' }
          ].map((cat, i) => (
            <Link key={i} to={cat.link} className="group relative overflow-hidden block rounded-sm shadow-xl">
              <img src={cat.img} alt={cat.title} className="w-full h-[550px] object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <span className="text-white/80 text-[10px] font-black tracking-[0.3em] mb-2">{cat.label}</span>
                <h3 className="text-white text-3xl font-serif font-black">{cat.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
