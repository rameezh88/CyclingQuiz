import {configureStore} from '@reduxjs/toolkit';
import gbfs from './reducers/gbfs';
import quiz from './reducers/quiz';

const createDebugger = require('redux-flipper').default;

const store = configureStore({
  reducer: {
    gbfs,
    quiz,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(createDebugger()),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
