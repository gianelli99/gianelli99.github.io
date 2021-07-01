import React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-scroll';

export const ScrollDown = ({ to, isLast }) => {
  return (
    <Fade bottom>
      <Link to={to} smooth={true} duration={1000} spy={true} offset={-64}>
        <div
          className={
            isLast
              ? 'scrolldown__container scrolldown_rotated'
              : 'scrolldown__container'
          }
        >
          <img
            className="scrolldown__img"
            src="./images/ScrollDown.png"
            alt=""
          />
        </div>
      </Link>
    </Fade>
  );
};
