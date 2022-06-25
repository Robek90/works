import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import Dots from '../../../assets/icon/MenuDots.svg';

import './analytics.css';

const data = [
  {
    id: 'Sale',
    label: 'Sale',
    value: 583,
    color: 'hsl(308, 70%, 50%)',
  },
  {
    id: 'Distribute',
    label: 'Distribute',
    value: 565,
    color: 'hsl(295, 70%, 50%)',
  },
  {
    id: 'Return',
    label: 'Return',
    value: 552,
    color: 'hsl(26, 70%, 50%)',
  },
];

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
        fontSize: '40px',
        fontWeight: 600,
      }}
    >
      {total}
    </text>
  );
};

const Analytics = () => (
  <div className="analyticsContainer">
    <div className="analytics">
      <p className="analyticsText">Analytics</p>
      <img className="analyticsDots" src={Dots} alt=""></img>
    </div>
    <ResponsivePie
      className="responsivePie"
      data={data}
      margin={{ top: 10, right: 80, bottom: 120, left: 80 }}
      innerRadius={0.75}
      activeOuterRadiusOffset={8}
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
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 23,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 22,
          itemTextColor: '#999',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
              },
            },
          ],
        },
      ]}
    />
  </div>
);

export default Analytics;
