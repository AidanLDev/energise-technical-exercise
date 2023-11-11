import { useEffect, useState } from "react";
import { readString } from 'react-papaparse';
import { IAnonCarbonDataItem } from "../interfaces/IAnonCarbonData";

const pathToData = '/data/anon_carbon_data.csv';

export const useFetchCSVData = () => {
  const [data, setData] = useState<IAnonCarbonDataItem[] | []>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    fetch(pathToData)
      .then((res) => res.text())
      .then((text) => {
        readString(text, {
          header: true,
          complete: (result) => setData(result.data),
        });
      })
      .catch((err) => console.error('Error parsing CSV: ', err))
      .finally(() => setLoading(false));
  }, []);
  return { data, loading };
}
