import axios from 'axios';
import {GBFSFeedNames, GBFSFeedType} from '../../../common/types';

function fetchData(service: GBFSFeedType, feedName: GBFSFeedNames) {
  const url = service.feeds?.find((feed: any) => feed.name === feedName)?.url;

  if (url) {
    return axios.get(url).then(response => response.data);
  }

  return null;
}

export function fetchStationStatusData(service: GBFSFeedType) {
  return fetchData(service, 'station_status');
}

export function fetchFreeBikeStatusData(service: GBFSFeedType) {
  return fetchData(service, 'free_bike_status');
}
