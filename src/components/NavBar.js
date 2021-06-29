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
          <li>
            <Link
              to="portfolio"
              smooth={true}
              duration={1500}
              spy={true}
              offset={-64}
              activeClass="accent-color"
            >
              {'<Portfolio />'}
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              smooth={true}
              duration={1500}
              spy={true}
              offset={-64}
              activeClass="accent-color"
            >
              {'<Experience />'}
            </Link>
          </li>
          <li>
            <Link
              to="resume"
              smooth={true}
              duration={1500}
              spy={true}
              offset={-64}
              activeClass="accent-color"
            >
              {'<Resume />'}
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={1500}
              spy={true}
              offset={-64}
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
