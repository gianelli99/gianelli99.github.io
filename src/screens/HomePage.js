import React from 'react';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Experience } from '../components/Experience';
import { NavBar } from '../components/NavBar';
import { Portfolio } from '../components/Portfolio';
import { Resume } from '../components/Resume';
import { Tag } from '../components/Tag';

export const HomePage = () => {
  return (
    <div className="primary-background">
      <NavBar />
      <div className="tag-padding">
        <div style={{ height: '300px' }}></div>
        <section id="about">
          <Tag tagName="About" InnerComponent={About} />
        </section>
        <div style={{ height: '300px' }}></div>
        <Tag tagName="Portfolio" InnerComponent={Portfolio} />
        <div style={{ height: '300px' }}></div>
        <Tag tagName="Experience" InnerComponent={Experience} />
        <div style={{ height: '300px' }}></div>
        <Tag tagName="Resume" InnerComponent={Resume} />
        <div style={{ height: '300px' }}></div>
        <Tag tagName="Contact" InnerComponent={Contact} isLastElement />
      </div>
    </div>
  );
};
