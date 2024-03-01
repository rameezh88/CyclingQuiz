import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../store';

export const selectQuizData = ({quiz}: RootState) => quiz;

export const selectQuizAttempts = createSelector(
  selectQuizData,
  ({attempts}) => attempts,
);
