import React from 'react';

export const ClosingTag = ({ tagName }) => {
  return <p className="accent-color tag">{'</' + tagName + '>'}</p>;
};
