import ClipLoader from 'react-spinners/ClipLoader';

interface ILoader {
  loading: boolean;
}

export const Loader = ({ loading }: ILoader) => {
  return (
    <ClipLoader
      loading={loading}
      size={150}
      aria-label='Loading spinner'
      color='#fff'
      className='fixed'
    />
  );
};
