import React from 'react';

type SquareProps = {
  value: number;
};

export const Square: React.FC<SquareProps> = ({ value }) => (
  <button className="square">{value}</button>
);
