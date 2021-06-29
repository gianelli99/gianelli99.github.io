import React from 'react';
import { Link } from 'react-scroll';
import { Fade } from 'react-reveal';

export const NavBar = () => {
  return (
    <nav className="navbar__navbar">
      <Fade top>
        <ul className="navbar__list">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={1500}
              spy={true}
              offset={-64}
              activeClass="accent-color"
            >
              {'<About />'}
            </Link>
          </li>
          <li>{'<Experience />'}</li>
          <li>{'<Portfolio />'}</li>
          <li>{'<Resume />'}</li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={1500}
              spy={true}
              activeClass="accent-color"
            >
              {'<Contact />'}
            </Link>
          </li>
        </ul>
      </Fade>
    </nav>
  );
};
