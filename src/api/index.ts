import axios from 'axios';

export const GBFS_AUTODISCOVERY_URLS = [
  'https://mds-global-mel.neuron-mobility.com/gbfs/2/',
  'https://mds-global-syd.neuron-mobility.com/gbfs/2/',
  'https://mds-global-cbr.neuron-mobility.com/gbfs/2/',
];

export enum GBFSFeedNames {
  'system_information',
  'free_bike_status',
  'station_status',
}

export const fetchGBFSData = (autodiscoveryUrl: string) =>
  axios.get(autodiscoveryUrl);
