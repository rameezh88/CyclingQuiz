import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../store';

export const selectUserData = ({user}: RootState) => user;

export const selectUsername = createSelector(
  selectUserData,
  ({user}) => user.username,
);
