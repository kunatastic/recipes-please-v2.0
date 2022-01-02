import React from 'react';
import { scroller } from 'react-scroll';
// import { GiHamburgerMenu } from 'react-icons/gi';
import { AlignLeft, AlignRight } from 'react-feather';

interface IProps {
  toggleMenu: () => void;
  viewMenu: boolean;
}

const Navbar = ({ toggleMenu, viewMenu }: IProps) => {
  const scrollTo = (element: string) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 100,
      smooth: true,
    });
  };

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <span style={{ fontSize: '2rem', fontWeight: '700' }}>Recipes Please (ツ)</span>
      </div>
      <div className="navbar__links">
        <ul className="flex">
          <li>
            <button className="navbar__anchor" onClick={() => scrollTo('about')}>
              About
            </button>
          </li>
          <li>
            <button className="navbar__anchor" onClick={() => scrollTo('search')}>
              Search
            </button>
          </li>
          <li>
            <button className="navbar__anchor" onClick={() => scrollTo('top-dishes')}>
              Top Dishes
            </button>
          </li>
          <li>
            <button className="navbar__anchor" onClick={() => scrollTo('contact')}>
              Contact
            </button>
          </li>
        </ul>
      </div>
      <button className="navbar__menu" onClick={toggleMenu} aria-label="Menu">
        <AlignRight />
      </button>
    </div>
  );
};

export default Navbar;
