import { scroller } from 'react-scroll';
import { X } from 'react-feather';

interface IProps {
  visible?: boolean;
  toggleMenu: () => void;
}

const Menu = ({ visible = false, toggleMenu }: IProps): JSX.Element => {
  const scrollTo = (elementId: string) => {
    toggleMenu();
    scroller.scrollTo(elementId, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div id="menu" className={`${visible ? 'menu-visible' : ''} menu`}>
      <button className="menu__close-menu" onClick={toggleMenu} aria-label="Close menu">
        <X color="#FCFBF6" />
      </button>
      <ul>
        <li>
          <button className="menu__anchor" onClick={() => scrollTo('about')}>
            About Us
          </button>
        </li>
        <li>
          <button className="menu__anchor" onClick={() => scrollTo('top-dishes')}>
            Top Dishes
          </button>
        </li>
        <li>
          <button className="menu__anchor" onClick={() => scrollTo('contact')}>
            Contact
          </button>
        </li>
        <li>
          <button className="menu__resume" onClick={() => scrollTo('search')}>
            Search
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
