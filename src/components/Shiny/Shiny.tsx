import React from 'react';

interface IShinyProps {
  bottom?: string;
  top?: string;
}
const Shiny = ({ bottom = 'auto', top = 'auto' }: IShinyProps): JSX.Element => {
  return (
    <article id="shiny">
      <article id="lightings" style={{ bottom, top }}>
        <section id="one">
          <section id="two">
            <section id="three">
              <section id="four">
                <section id="five"></section>
              </section>
            </section>
          </section>
        </section>
      </article>
    </article>
  );
};

export default Shiny;
