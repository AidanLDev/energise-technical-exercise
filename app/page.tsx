'use client';
import { CarbonDataAreaChart } from './components/chart/CarbonDataAreaChart';
import { Loader } from './components/Loader';
import { Title } from './components/Title';
import { useFetchCSVData } from './hooks/useFetchCSVData';

export default function Home() {
  const { data, loading } = useFetchCSVData();

  return (
    <main className='flex min-h-screen flex-col items-center'>
      <Title />
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <CarbonDataAreaChart chartData={data} />
      )}
    </main>
  );
}
