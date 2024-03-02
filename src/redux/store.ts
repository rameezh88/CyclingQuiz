import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import gbfs from './reducers/gbfs';
import quiz from './reducers/quiz';
import user from './reducers/user';
import userListenerMiddleware from './reducers/user/middlewares';

const createDebugger = require('redux-flipper').default;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  safelist: ['quiz', 'user'],
};

const rootReducer = combineReducers({
  user,
  gbfs,
  quiz,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .prepend(userListenerMiddleware.middleware)
      .concat(createDebugger()),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
