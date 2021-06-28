import React from 'react';

export const OpeningTag = ({ tagName }) => {
  return <p className="accent-color tag">{'<' + tagName + '>'}</p>;
};
