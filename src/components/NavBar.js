import React from 'react';

export const NavBar = () => {
  return (
    <nav className="navbar__navbar">
      <ul className="navbar__list">
        <li className="secondary-color">{'<About />'}</li>
        <li className="accent-color">{'<Experience />'}</li>
        <li className="accent-color">{'<Portfolio />'}</li>
        <li className="accent-color">{'<Resume />'}</li>
        <li className="accent-color">{'<Contact />'}</li>
      </ul>
    </nav>
  );
};
