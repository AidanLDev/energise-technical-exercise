'use client';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { ChartTooltip } from './ChartTooltip';
import { getMaxCarbonAmount } from '@/app/lib/Utils';
import { ICarbonDataAreaChartProps } from '@/app/interfaces/IChartTypes';
import { useState } from 'react';

export const CarbonDataAreaChart = ({
  chartData,
}: ICarbonDataAreaChartProps) => {
  const [showGrid, setShowGrid] = useState(false);
  return (
    <AreaChart
      data={chartData}
      width={1200}
      height={720}
      margin={{ top: 10 }}
      onClick={() => setShowGrid((prevState) => !prevState)}
    >
      {showGrid && <CartesianGrid strokeDasharray='3 3' />}
      <XAxis dataKey='name' label={{ value: 'Week', dy: 20, dx: -24 }} />
      {/* Programmatically get highest amount of data to set graph hight */}
      <YAxis
        dataKey='carbonAmount'
        domain={[0, getMaxCarbonAmount(chartData)]}
        label={{ value: 'Carbon (tCO2e)', angle: -90, dy: 20 }}
      />
      <Tooltip content={<ChartTooltip />} />
      <Legend wrapperStyle={{ bottom: '-20px' }} />
      <Area
        type='monotone'
        dataKey='carbonAmount'
        stroke='#FFF'
        fill='#F36B56'
        name='Carbon Amount (tCO2e)'
      />
    </AreaChart>
  );
};
