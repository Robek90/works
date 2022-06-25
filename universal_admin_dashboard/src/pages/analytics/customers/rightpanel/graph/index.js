import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const CenteredMetric = ({ dataWithArc, centerX, centerY }) => {
  let total = 0;
  dataWithArc.forEach((datum) => {
    total += datum.value;
  });
  return (
    <text
      x={centerX}
      y={centerY}
      textAnchor="middle"
      dominantBaseline="central"
      style={{
        fontSize: '20px',
        fontWeight: 600,
      }}
    >
      {total}
    </text>
  );
};

export default function Circle(props) {
  const { data } = props;

  return (
    <ResponsivePie
      className="responsivePie"
      data={data}
      margin={{ top: 50, right: 100, bottom: 50, left: 100 }}
      innerRadius={0.8}
      activeOuterRadiusOffset={8}
      colors={{ scheme: data[0].color }}
      borderWidth={3}
      borderColor={{
        from: 'color',
        modifiers: [['darker', '0.2']],
      }}
      enableArcLinkLabels={false}
      arcLinkLabelsSkipAngle={2}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      enableArcLabels={false}
      arcLabelsSkipAngle={10}
      layers={['arcs', 'arcLabels', 'arcLinkLabels', 'legends', CenteredMetric]}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [['darker', 2]],
      }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      animate={false}
      motionConfig={{
        mass: 1,
        tension: 170,
        friction: 26,
        clamp: false,
        precision: 0.01,
        velocity: 0,
      }}
    />
  );
}
