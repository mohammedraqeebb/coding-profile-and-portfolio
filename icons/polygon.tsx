import React, { FC } from 'react';

type PolygonProps = {
  size: number;
  number: number;
};

const Polygon: FC<PolygonProps> = ({ size, number }) => {
  return (
    <div
      style={{
        height: size,
        width: size,
        clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
        backgroundImage: 'radial-gradient(#000000 0%, #222023 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        border: '1.5px solid #4f46e5',
      }}
    >
      <span style={{ fontSize: size * 0.5 }}>{number}</span>
    </div>
  );
};

export default Polygon;
