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
      <div className="tag-padding">
        <section
          id="about"
          style={{ height: height - 64 + 'px' }}
          className="homepage-section"
        >
          <Tag tagName="About" InnerComponent={About} />
        </section>

        <section
          id="portfolio"
          style={{ height: height - 64 + 'px' }}
          className="homepage-section"
        >
          <Tag tagName="Portfolio" InnerComponent={Portfolio} />
        </section>

        <section
          id="experience"
          style={{ height: height - 64 + 'px' }}
          className="homepage-section"
        >
          <Tag tagName="Experience" InnerComponent={Experience} />
        </section>

        <section
          id="resume"
          style={{ height: height - 64 + 'px' }}
          className="homepage-section"
        >
          <Tag tagName="Resume" InnerComponent={Resume} />
        </section>

        <section
          id="contact"
          style={{ height: height - 64 + 'px' }}
          className="homepage-section"
        >
          <Tag tagName="Contact" InnerComponent={Contact} isLastElement />
        </section>
      </div>
    </div>
  );
};
