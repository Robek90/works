import React from 'react';
import { ResponsiveBullet } from '@nivo/bullet';

import './addMonth.css';

const data = [
  {
    id: 'Jan.',
    ranges: [2000],
    measures: [1900],
    markers: [810],
  },
  {
    id: 'Feb',
    ranges: [1650],
    measures: [670],
    markers: [190],
  },
  {
    id: 'Mar',
    ranges: [800],
    measures: [490],
    markers: [660],
  },
  {
    id: 'Apr',
    ranges: [410],
    measures: [83],
    markers: [47],
  },
  {
    id: 'May',
    ranges: [600],
    measures: [100],
    markers: [90],
  },
  {
    id: 'Jun',
    ranges: [410],
    measures: [83],
    markers: [47],
  },
  {
    id: 'Jul',
    ranges: [700],
    measures: [690],
    markers: [479],
  },
];

const addMonth = () => (
  <div className="addMonthContainer">
    <div className="addMonth">Product Add by Month</div>
    <ResponsiveBullet
      data={data}
      maxValue={1000}
      margin={{ top: 50, right: 90, bottom: 50, left: 90 }}
      spacing={46}
      titleAlign="start"
      titleOffsetX={-70}
      measureSize={2}
    />
  </div>
);

export default addMonth;
