import { IAnonCarbonDataItem } from '../interfaces/IAnonCarbonData';
import { IRawAnonCarbonDataItem } from '../interfaces/IRawAnonCarbonData';

export const getMaxCarbonAmount = (data: IAnonCarbonDataItem[]): number => {
  const filteredData = data.filter(
    (row) => row.carbonAmount && !Number.isNaN(Number(row.carbonAmount))
  );
  const highestAmountOfCarbon = Math.max(
    ...filteredData.map((row) => Number(row.carbonAmount))
  );

  return Math.ceil(highestAmountOfCarbon / 100) * 100;
};

export const getWeeklyCarbonEmissions = (
  rawCarbonData: IRawAnonCarbonDataItem[]
): IAnonCarbonDataItem[] => {
  return rawCarbonData.map((row, idx) => {
    let weeklyCO2Level = 0;
    if (!Number.isNaN(Number(row.tCO2e))) {
      weeklyCO2Level =
        idx === 0
          ? Number(row.tCO2e)
          : Number(row.tCO2e) - Number(rawCarbonData[idx - 1].tCO2e);
    }
    return {
      name: row.Week,
      carbonAmount: weeklyCO2Level.toFixed(2),
    };
  });
};
