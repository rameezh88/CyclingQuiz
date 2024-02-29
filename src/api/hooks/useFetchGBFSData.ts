import {useQueries} from '@tanstack/react-query';
import {fetchGBFSData} from '..';
import {useEffect} from 'react';
import {GBFS_AREAS} from '../constants';
import {setAllServices} from '../../redux/reducers/gbfs';
import {useDispatch} from 'react-redux';

const useFetchGBFSData = () => {
  const dispatch = useDispatch();

  const {data} = useQueries({
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
          ...result.data?.data?.data?.en,
          city: GBFS_AREAS[index].city,
        })),
      };
    },
  });

  useEffect(() => {
    if (data) {
      dispatch(setAllServices(data));
    }
  }, [data]);
};

export default useFetchGBFSData;
