'use client';
import { CarbonDataAreaChart } from './components/CarbonDataAreaChart';
import { Loader } from './components/Loader';
import { useFetchCSVData } from './hooks/useFetchCSVData';

export default function Home() {
  const { data, loading } = useFetchCSVData();

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <CarbonDataAreaChart chartData={data} />
      )}
    </main>
  );
}
