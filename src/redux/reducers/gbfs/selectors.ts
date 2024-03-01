import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../store';

export const selectGbfsData = ({gbfs}: RootState) => gbfs;

export const selectAllServices = createSelector(
  selectGbfsData,
  ({allServices}) => allServices,
);
