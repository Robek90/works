import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import GraphPie from './graph/index.js';
import Dots from '../../../../assets/icon/VerticalMenu.svg';
import Message from '../../../../assets/icon/Message_Analytic.svg';
import Call from '../../../../assets/icon/Call_Analytic.svg';
import Location from '../../../../assets/icon/Location_Analytic.svg';
import CrosClose from '../../../../assets/icon/CrossClose.jpg';

import useStyles from './stylesInfoC';

const barGraphic = [
  {
    month: 'Jan',
    info: 162,
    infoColor: 'hsl(140, 70%, 50%)',
  },
  {
    month: 'Feb',
    info: 98,
    infoColor: 'hsl(140, 70%, 50%)',
  },
  {
    month: 'Mar',
    info: 171,
    infoColor: 'hsl(140, 70%, 50%)',
  },
  {
    month: 'Apr',
    info: 165,
    infoColor: 'hsl(140, 70%, 50%)',
  },
  {
    month: 'May',
    info: 31,
    infoColor: 'hsl(140, 70%, 50%)',
  },
  {
    month: 'Jun',
    info: 194,
    infoColor: 'hsl(140, 70%, 50%)',
  },
];

const data1 = [
  {
    id: 'Sale',
    label: 'Sale',
    value: 583,
    color: 'set1',
  },
  {
    id: 'Distribute',
    label: 'Distribute',
    value: 565,
  },
];

const data2 = [
  {
    id: 'Sale',
    label: 'Sale',
    value: 300,
    color: 'set2',
  },
  {
    id: 'Distribute',
    label: 'Distribute',
    value: 400,
  },
];

const InfoCustomer = (props) => {
  const classes = useStyles();

  const { rows, close } = props;

  return (
    <div className={classes.infoCustomers}>
      <img onClick={close} className={classes.cross} src={CrosClose} alt="Cross" />
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes.name}>
            {rows.name.first} {rows.name.last}
          </div>
          <div className={classes.profession}>{rows.location.country}</div>
        </div>
        <div className={classes.body}>
          <h3 className={classes.title}>Contact Info</h3>
          <div className={classes.string}>
            <img className={classes.svg} src={Message} alt="" />
            <p className={classes.p}>{rows.email}</p>
          </div>
          <div className={classes.string}>
            <img className={classes.svg} src={Call} alt="" />
            <p className={classes.p}>{rows.phone}</p>
          </div>
          <div className={classes.string}>
            <img className={classes.svg} src={Location} alt="" />
            <p className={classes.p}>
              {rows.location.city} {rows.location.street.number} {rows.location.street.name}
            </p>
          </div>
        </div>
        <div className={classes.charts}>
          <h3 className={classes.title}>Performance</h3>
          <img className={classes.salesAnalyticsDots} src={Dots} alt=""></img>
          <ResponsiveBar
            data={barGraphic}
            keys={['info']}
            colors={{ scheme: 'pastel1' }}
            indexBy="month"
            margin={{ top: 50, right: 0, bottom: 50, left: 30 }}
            padding={0.5}
            enableGridY={false}
            enableLabel={false}
          />
        </div>
        <div className={classes.leftCircle}>
          <GraphPie data={data1} />
        </div>
        <div className={classes.rightCircle}>
          <GraphPie data={data2} />
        </div>
      </div>
    </div>
  );
};

export default InfoCustomer;
