import {useQueries} from '@tanstack/react-query';
import {GBFS_AUTODISCOVERY_URLS, fetchGBFSData} from '..';
import {useEffect} from 'react';

const useFetchGBFSData = () => {
  const {data, isLoading} = useQueries({
    queries: GBFS_AUTODISCOVERY_URLS.map(autodiscoveryUrl => {
      return {
        queryKey: ['gbfs_data', autodiscoveryUrl],
        queryFn: () => fetchGBFSData(autodiscoveryUrl),
      };
    }),
    combine: results => {
      return {
        data: results.map(result => result.data?.data),
        isLoading: results.some(result => result.isLoading),
      };
    },
  });

  useEffect(() => {
    // if (isLoading) {
    //   console.log('GBFS data is loading..', isLoading);
    // }
    // if (data) {
    //   console.log('GBFS data:', data);
    // }
  }, [data, isLoading]);
};

export default useFetchGBFSData;
