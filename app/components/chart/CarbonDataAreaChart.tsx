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

export const CarbonDataAreaChart = ({
  chartData,
}: ICarbonDataAreaChartProps) => {
  return (
    <AreaChart data={chartData} width={1200} height={720} margin={{ top: 10 }}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' label={{ value: 'Week', dy: 20, dx: -24 }} />
      {/* Programmatically get highest amount of data to set graph hight */}
      <YAxis
        dataKey='carbonAmount'
        domain={[0, getMaxCarbonAmount(chartData)]}
      />
      <Tooltip content={<ChartTooltip />} />
      <Legend wrapperStyle={{ bottom: '-20px' }} />
      <Area
        type='monotone'
        dataKey='carbonAmount'
        stroke='#8884d8'
        fill='#8884d8'
        name='Carbon Amount (tCO2e)'
      />
    </AreaChart>
  );
};
