import React from 'react';
import { Project } from './Project';
import { Tag } from './Tag';

export const Portfolio = () => {
  return (
    <>
      <Tag tagName="Mobile" InnerComponent={Project} />
      <Tag tagName="Web" InnerComponent={Project} />
      <Tag tagName="Desktop" InnerComponent={Project} />
    </>
  );
};
