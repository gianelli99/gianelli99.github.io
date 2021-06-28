import React from 'react';
import { Fade, Slide } from 'react-reveal';
import { About } from '../components/About';
import { NavBar } from '../components/NavBar';

export const HomePage = () => {
  return (
    <div className="primary-background">
      <NavBar />
      <Fade top>
        <About />
      </Fade>
    </div>
  );
};
