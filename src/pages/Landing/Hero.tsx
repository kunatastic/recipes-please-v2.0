import React from 'react';

import HeroDish from '../../assets/heroDish.jpg';
import { Shiny } from '../../components';

const Hero = () => {
  return (
    <>
      <section id="hero" className="hero">
        <Shiny top="-60px" bottom="0px" />
        <div className="grid">
          <div className="hero__content">
            <div className="hero__secondary">Chase a new Flavor everyday</div>
            <div className="hero__primary">The key to happy you is tasty dishes</div>
            <div className="hero__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus voluptatibus unde
              exercitationem fugiat repellendus sunt sint, illo numquam beatae quas ratione ab nisi
              placeat adipisci atque explicabo ut eveniet vel.
            </div>
            <button className="hero__button">Explore More</button>
          </div>
          <div className="hero__content">
            <div className="image__container">
              <img src={HeroDish} alt="food" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
