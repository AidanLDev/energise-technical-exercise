import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { IAnonCarbonDataItem } from '../interfaces/IAnonCarbonData';

interface ICarbonDataAreaChartProps extends IAnonCarbonDataItem {}

export const CarbonDataAreaChart = ({
  chartData,
}: ICarbonDataAreaChartProps) => {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <AreaChart data={chartData}></AreaChart>
    </ResponsiveContainer>
  );
};
