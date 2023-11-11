import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

interface ICarbonDataAreaChartProps {
  chartData: {
    name: string;
    carbonAmount: string;
  }[];
}

export const CarbonDataAreaChart = ({
  chartData,
}: ICarbonDataAreaChartProps) => {
  return (
      <AreaChart data={chartData} width={1200} height={720}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Area
          type='monotone'
          dataKey='carbonAmount'
          stroke='#8884d8'
          fill='#8884d8'
        />
      </AreaChart>
  );
};
