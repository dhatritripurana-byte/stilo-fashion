import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <footer className="bg-stone-900 text-stone-400 py-12 px-4 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-serif text-2xl mb-4">STILO</h3>
            <p className="text-sm">Elevating everyday fashion through thoughtful coordination of colors, textures, and details.</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#/palettes" className="hover:text-white transition-colors">Color Guides</a></li>
              <li><a href="#/outfits" className="hover:text-white transition-colors">Style Lookbooks</a></li>
              <li><a href="#/accessories" className="hover:text-white transition-colors">Accessories</a></li>
              <li><a href="#/hair" className="hover:text-white transition-colors">Hair Tips</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4 uppercase tracking-widest text-xs">Project</h4>
            <p className="text-sm mb-4 italic">Academic Fashion Styling Portfolio</p>
            <div className="flex space-x-4">
              <span className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-xs">IG</span>
              <span className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-xs">PN</span>
              <span className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-xs">YT</span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-stone-800 mt-12 pt-8 text-xs text-center">
          &copy; {new Date().getFullYear()} STILO Fashion Lab. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
