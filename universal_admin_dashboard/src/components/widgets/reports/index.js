import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import Dots from '../../../assets/icon/MenuDots.svg';

import './reports.css';

const data = [
  {
    id: 'Sales',
    color: 'hsl(357, 70%, 50%)',
    data: [
      {
        x: '10am',
        y: 80,
      },
      {
        x: '11am',
        y: 78,
      },
      {
        x: '12am',
        y: 47,
      },
      {
        x: '01am',
        y: 59,
      },
      {
        x: '02am',
        y: 17,
      },
      {
        x: '03am',
        y: 18,
      },
      {
        x: '04am',
        y: 100,
      },
      {
        x: '05am',
        y: 87,
      },
      {
        x: '06am',
        y: 23,
      },
      {
        x: '07am',
        y: 94,
      },
    ],
  },
];

const Reports = () => (
  <div className="reportsContainer">
    <div className="reports">
      <p className="reportsText">Reports</p>
      <img className="reportsDots" src={Dots} alt=""></img>
    </div>
    <ResponsiveLine
      data={data}
      margin={{ top: 15, right: 20, bottom: 100, left: 40 }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendOffset: 30,
        legendPosition: 'middle',
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      enableGridX={false}
      colors={{ scheme: 'paired' }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      enableSlices="x"
      crosshairType="bottom"
      motionConfig="default"
      legends={[]}
    />
  </div>
);

export default Reports;
