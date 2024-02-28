import axios from 'axios';

export const fetchGBFSData = (autodiscoveryUrl: string) =>
  axios.get(autodiscoveryUrl);
