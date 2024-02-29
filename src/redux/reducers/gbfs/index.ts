import {createSlice} from '@reduxjs/toolkit';
import {GBFSFeedType} from '../../../common/types';

interface GBFSState {
  allServices: GBFSFeedType[];
}

const initialState: GBFSState = {
  allServices: [],
};

const gbfsSlice = createSlice({
  name: 'gbfs',
  initialState,
  reducers: {
    setAllServices: (state, action) => {
      state.allServices = action.payload;
    },
  },
});

export const {setAllServices} = gbfsSlice.actions;

export default gbfsSlice.reducer;
