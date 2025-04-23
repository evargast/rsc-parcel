import { Chart, Legend, Line } from '@adobe/react-spectrum-charts';
import React from 'react';

// Sample data for the chart
const defaultChartProps = {
  data: [
    { datetime: 1667890800000, value: 147, series: 'Series 1' },
    { datetime: 1667977200000, value: 148, series: 'Series 1' },
    { datetime: 1668063600000, value: 148, series: 'Series 1' },
    { datetime: 1668150000000, value: 131, series: 'Series 1' },
    { datetime: 1668236400000, value: 11, series: 'Series 1' },
    { datetime: 1668322800000, value: 17, series: 'Series 1' },
    { datetime: 1667890800000, value: 477, series: 'Series 2' },
    { datetime: 1667977200000, value: 481, series: 'Series 2' },
    { datetime: 1668063600000, value: 483, series: 'Series 2' },
    { datetime: 1668150000000, value: 310, series: 'Series 2' },
    { datetime: 1668236400000, value: 18, series: 'Series 2' },
    { datetime: 1668322800000, value: 20, series: 'Series 2' }
  ],
  width: 600,
  height: 400
};

const ChartComponent = () => {
  return (
    <Chart {...defaultChartProps}>
      <Line
        dimension="datetime"
        metric="value"
        scaleType="time"
        color="series"
        name="line0"
        lineType="series"
      />
      <Legend lineWidth={{ value: 0 }} />
    </Chart>
  );
};

export default ChartComponent; 