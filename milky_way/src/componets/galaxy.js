import React from 'react';
import { Stage, Layer, Circle, Arc } from 'react-konva';
import Blackhole from "./blackhole";

const GalaxyCanvas = () => {
  const stars = Array.from({ length: 10000 }, (_, i) => {
    const angle = Math.random() * Math.PI * 2;
    const radius = 25 + Math.random() * (window.innerHeight / 2);
    return {
      x: radius * Math.cos(angle) + window.innerWidth / 2,
      y: radius * Math.sin(angle) + window.innerHeight / 2,
      size: Math.random() * 1 + 0.001,
    };
  });

  return (
    <>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Blackhole/>
        <Layer>
            {stars.map((star, index) => (
            <Circle
                key={index}
                x={star.x}
                y={star.y}
                radius={star.size}
                fill="white"
            />
            ))}
        </Layer>
      </Stage>
    </>
  );
};

export default GalaxyCanvas;