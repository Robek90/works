import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import Dots from '../../../assets/icon/MenuDots.svg';

import './salesAnalytics.css';

export default function SalesAnalytics(props) {
  const { productFocus } = props;

  const data = [
    {
      id: 'Price Sales',
      label: 'Price Sales',
      value: productFocus.price,
      color: 'hsl(308, 70%, 50%)',
    },
    {
      id: 'Total Order',
      label: 'Total Order',
      value: productFocus.totalorder,
      color: 'hsl(295, 70%, 50%)',
    },
    {
      id: 'Cancel Price',
      label: 'Cancel Price',
      value: productFocus.price * productFocus.totalorder,
      color: 'hsl(26, 70%, 50%)',
    },
  ];

  return (
    <div className="salesAnalyticsContainer">
      <div className="salesAnalytics">
        <p className="salesAnalyticsText">Analytics</p>
        <img className="salesAnalyticsDots" src={Dots} alt=""></img>
      </div>
      <ResponsivePie
        className="salesResponsivePie"
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
            itemWidth: 110,
            itemHeight: 30,
            itemTextColor: '#999',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 25,
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
}
