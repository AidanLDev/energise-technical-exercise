import React from 'react';
import { TooltipProps } from 'recharts';
type AnyString = string;

export const ChartTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<AnyString, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className='bg-transparent '>
        <p className='label'>{`Week ${label}: ${payload[0].value} (tCO2e)`}</p>
      </div>
    );
  }
};
