import React from 'react';
import { Fade, Slide } from 'react-reveal';

export const About = () => {
  return (
    <Fade top>
      <div>
        <p className="accent-color">{'<About>'}</p>
        <h1 className="secondary-color lato-font">
          Hello, I'm Gianfranco Elli
        </h1>
        <p>Blablabla</p>
        <p>Blablabla</p>
        <p>Blablabla</p>
        <p className="accent-color">{'<About />'}</p>
        <p className="accent-color">{'<Experience>'}</p>
        <p className="accent-color">{'<Experience />'}</p>
        <p className="accent-color">{'<Portfolio>'}</p>
        <p className="accent-color">{'<Portfolio />'}</p>
        <p className="accent-color">{'<Resume>'}</p>
        <p className="accent-color">{'<Resume />'}</p>
        <p className="accent-color">{'<Contact>'}</p>
        <p className="accent-color">{'<Contact />'}</p>
      </div>
    </Fade>
  );
};
