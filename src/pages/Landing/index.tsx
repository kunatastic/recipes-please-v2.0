import React, { useState } from 'react';

import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Search from './Search';
import Footer from './Footer';
import Menu from './Menu';
import TopDishes from './TopDishes';

const Landing = () => {
  const [viewMenu, setViewMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setViewMenu(!viewMenu);
  };

  return (
    <>
      <Menu visible={viewMenu} toggleMenu={() => toggleMenu()} />
      <Navbar toggleMenu={() => toggleMenu()} viewMenu={viewMenu} />
      <Hero />
      <About />
      <TopDishes />
      <Search />
      <Footer />
    </>
  );
};

export default Landing;
