import React from 'react';
import { Fade } from 'react-reveal';
import { OpeningTag } from './OpeningTag';
import { ClosingTag } from './ClosingTag';
export const Tag = ({ InnerComponent, tagName, isLastElement }) => {
  return (
    <Fade left={!!isLastElement} bottom={!isLastElement}>
      <OpeningTag tagName={tagName} />
      <div className="tag-padding">
        {InnerComponent ? <InnerComponent /> : false}
      </div>
      <ClosingTag tagName={tagName} />
    </Fade>
  );
};
