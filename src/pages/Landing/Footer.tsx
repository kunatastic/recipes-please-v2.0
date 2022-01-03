import React from 'react';
import { Shiny } from '../../components';

const Footer = () => {
  return (
    <>
      <section id="footer">
        {/* <Shiny top="0px" /> */}
        <div className="flex">
          <div className="left__container">
            <div className="logo">Recipes Please</div>
            <p className="quote">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, non rem sequi ad
              at nemo, laborum esse provident voluptas itaque doloribus iusto aut cumque est
              quibusdam animi? Necessitatibus, veniam illo.
            </p>
          </div>

          <div className="spacer"></div>
          <div className="right__container">
            <div className="links">
              <ul>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>
            Designed and Crafted by <a href="https://www.linkedin.com/in/kunatastic/">kunatastic</a>
            .<br />
            This is a free and open-source project. Feel free to use it for any purpose. Credits
            would be appreciated.
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
