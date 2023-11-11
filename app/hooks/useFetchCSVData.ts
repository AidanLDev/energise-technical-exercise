import { useEffect, useState, useRef } from 'react';
import { readString } from 'react-papaparse';
import { IAnonCarbonDataItem } from '../interfaces/IAnonCarbonData';
import { IRawAnonCarbonDataItem } from '../interfaces/IRawAnonCarbonData';

const pathToData = '/data/anon_carbon_data.csv';

export const useFetchCSVData = () => {
  const [data, setData] = useState<IAnonCarbonDataItem[] | []>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const didRun = useRef<boolean | ((prev: boolean) => boolean)>(false);

  useEffect(() => {
    // useEffect has already run so return early
    // Stop useEffect running once on the server than again on the client
    if (typeof window !== 'undefined') {
      if (didRun.current) {
        return;
      }
      setLoading(true);
      fetch(pathToData)
        .then((res) => res.text())
        .then((text) => {
          readString<IRawAnonCarbonDataItem>(text, {
            header: true,
            complete: (results) => {
              setData(results.data.map((row) => ({
                name: row.Week,
                carbonAmount: row.tCO2e,
              })));
            },
          });
        })
        .catch((err) => console.error('Error parsing CSV: ', err))
        .finally(() => {
          setLoading(false);
          didRun.current = (prev) => !prev;
        });
    }
  }, []);
  return { data, loading };
};
