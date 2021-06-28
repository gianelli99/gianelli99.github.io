import React from 'react';
import { Fade } from 'react-reveal';

export const NavBar = () => {
  return (
    <nav className="navbar__navbar">
      <Fade top>
        <ul className="navbar__list">
          <li className="accent-color">{'<About />'}</li>
          <li>{'<Experience />'}</li>
          <li>{'<Portfolio />'}</li>
          <li>{'<Resume />'}</li>
          <li>{'<Contact />'}</li>
        </ul>
      </Fade>
    </nav>
  );
};
