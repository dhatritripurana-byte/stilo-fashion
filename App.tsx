const App = () => {
  return (
    <div>
      <h1>Hello Dhatri 💙</h1>
    </div>
  );
};

export default App;import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Palettes from './pages/Palettes';
import Outfits from './pages/Outfits';
import Remix from './pages/Remix';
import StyleMyPiece from './pages/StyleMyPiece';
import Accessories from './pages/Accessories';
import HairGuide from './pages/HairGuide';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/palettes" element={<Palettes />} />
          <Route path="/outfits" element={<Outfits />} />
          <Route path="/remix" element={<Remix />} />
          <Route path="/style-me" element={<StyleMyPiece />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/hair" element={<HairGuide />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
