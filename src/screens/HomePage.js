import React from 'react';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Experience } from '../components/Experience';
import { NavBar } from '../components/NavBar';
import { Portfolio } from '../components/Portfolio';
import { Resume } from '../components/Resume';
import { Tag } from '../components/Tag';
import { useWindowDimensions } from '../hooks/useWindowDimensions';

export const HomePage = () => {
  const { height } = useWindowDimensions();
  return (
    <div className="primary-background">
      <NavBar />
      <div className="tag-padding main-wrapper">
        <section
          id="about"
          style={{ minHeight: height - 154 + 'px' }}
          className="homepage-section"
        >
          <Tag tagName="About" InnerComponent={About} />
        </section>
        <div
          style={{
            height: '30px',
            margin: '30px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img
            style={{ maxHeight: '100%', maxWidth: '100%' }}
            src="./images/ScrollDown.png"
            alt=""
          />
        </div>
        <section
          id="portfolio"
          style={{ minHeight: height - 64 + 'px' }}
          className="homepage-section"
        >
          <Tag tagName="Portfolio" InnerComponent={Portfolio} />
        </section>

        <section
          id="experience"
          style={{ minHeight: height - 64 + 'px' }}
          className="homepage-section"
        >
          <Tag tagName="Experience" InnerComponent={Experience} />
        </section>

        <section
          id="resume"
          style={{ minHeight: height - 64 + 'px' }}
          className="homepage-section"
        >
          <Tag tagName="Resume" InnerComponent={Resume} />
        </section>

        <section
          id="contact"
          style={{ minHeight: height - 64 + 'px' }}
          className="homepage-section"
        >
          <Tag tagName="Contact" InnerComponent={Contact} isLastElement />
        </section>
      </div>
    </div>
  );
};
