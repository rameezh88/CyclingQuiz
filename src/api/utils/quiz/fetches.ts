import axios from 'axios';
import {GBFSFeedType} from '../../../common/types';

export function fetchStationData(service: GBFSFeedType) {
  const stationStatusUrl = service.feeds.find(
    (feed: any) => feed.name === 'station_status',
  )?.url;

  if (stationStatusUrl) {
    return axios.get(stationStatusUrl).then(response => response.data);
  }

  return null;
}
