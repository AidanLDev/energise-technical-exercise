import { IAnonCarbonDataItem } from '../interfaces/IAnonCarbonData';

export const getMaxCarbonAmount = (data: IAnonCarbonDataItem[]): number => {
  const filteredData = data.filter(
    (row) => row.carbonAmount && !Number.isNaN(Number(row.carbonAmount))
  );
  const highestAmountOfCarbon = Math.max(
    ...filteredData.map((row) => Number(row.carbonAmount))
  );

  return Math.ceil(highestAmountOfCarbon / 1000) * 1000;
};
