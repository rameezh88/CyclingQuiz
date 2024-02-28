import {useQueries} from '@tanstack/react-query';
import {fetchGBFSData} from '..';
import {useEffect} from 'react';
import {GBFS_AREAS} from '../constants';

const useFetchGBFSData = () => {
  const {data, isLoading} = useQueries({
    queries: GBFS_AREAS.map(area => {
      return {
        queryKey: ['gbfs_data', area.city],
        queryFn: () => fetchGBFSData(area.url),
        staleTime: 24 * 60 * 60 * 1000, // 24 hours stale time
      };
    }),
    combine: results => {
      return {
        // I'd change this to be more generic for the particular locale of the user
        data: results.map((result, index) => ({
          ...result.data?.data?.data?.en?.feeds,
          city: GBFS_AREAS[index].city,
        })),
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
