import {configureStore} from '@reduxjs/toolkit';
import gbfs from './reducers/gbfs';

const createDebugger = require('redux-flipper').default;

const store = configureStore({
  reducer: {
    gbfs,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(createDebugger()),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
