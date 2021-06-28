import React from 'react';
import { Fade } from 'react-reveal';
import { OpeningTag } from './OpeningTag';
import { ClosingTag } from './ClosingTag';
import { Tag } from './Tag';

export const Portfolio = () => {
  return (
    <>
      <Tag tagName="Mobile" InnerComponent={undefined} />
      <Tag tagName="Web" InnerComponent={undefined} />
      <Tag tagName="Desktop" InnerComponent={undefined} />
    </>
  );
};
