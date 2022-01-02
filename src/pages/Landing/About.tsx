import React from 'react';

import Knife from '../../assets/knife.jpg';

const About = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="flex">
          <div className="left__container">
            <div className="title">About Us</div>
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolore cum, culpa
              debitis pariatur voluptatibus tenetur nihil at illum sed voluptas provident rerum,
              cupiditate accusamus explicabo a, asperiores quaerat placeat.
            </div>
          </div>
          <div className="center__container">
            <div className="image-container">
              <img src={Knife} alt="food" />
            </div>
          </div>
          <div className="right__container">
            <div className="title">Our Story</div>
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolore cum, culpa
              debitis pariatur voluptatibus tenetur nihil at illum sed voluptas provident rerum,
              cupiditate accusamus explicabo a, asperiores quaerat placeat.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
