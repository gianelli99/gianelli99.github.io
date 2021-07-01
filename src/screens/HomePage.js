import React from 'react';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Experience } from '../components/Experience';
import { NavBar } from '../components/NavBar';
import { Portfolio } from '../components/Portfolio';
import { Resume } from '../components/Resume';
import { ScrollDown } from '../components/ScrollDown';
import { Tag } from '../components/Tag';
import { useWindowDimensions } from '../hooks/useWindowDimensions';

export const HomePage = () => {
  const { height } = useWindowDimensions();
  const scrollDownHeight = 90;
  const navBarHeight = 64;

  const CalculateMinHeight = () => {
    let minHeight = height - navBarHeight - scrollDownHeight;
    return minHeight;
  };

  return (
    <div className="primary-background">
      <NavBar />
      <div className="tag-padding main-wrapper">
        <section
          id="about"
          style={{ minHeight: CalculateMinHeight().toString() + 'px' }}
          className="homepage-section"
        >
          <Tag tagName="About" InnerComponent={About} />
        </section>
        <ScrollDown to="portfolio" />
        <section
          id="portfolio"
          style={{ minHeight: CalculateMinHeight().toString() + 'px' }}
          className="homepage-section"
        >
          <Tag tagName="Portfolio" InnerComponent={Portfolio} />
        </section>
        <ScrollDown to="experience" />
        <section
          id="experience"
          style={{ minHeight: CalculateMinHeight().toString() + 'px' }}
          className="homepage-section"
        >
          <Tag tagName="Experience" InnerComponent={Experience} />
        </section>
        <ScrollDown to="resume" />
        <section
          id="resume"
          style={{ minHeight: CalculateMinHeight().toString() + 'px' }}
          className="homepage-section"
        >
          <Tag tagName="Resume" InnerComponent={Resume} />
        </section>
        <ScrollDown to="contact" />
        <section
          id="contact"
          style={{ minHeight: CalculateMinHeight().toString() + 'px' }}
          className="homepage-section"
        >
          <Tag tagName="Contact" InnerComponent={Contact} isLastElement />
        </section>
        <ScrollDown to="about" isLast />
      </div>
    </div>
  );
};
