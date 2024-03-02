import {createListenerMiddleware, isAnyOf} from '@reduxjs/toolkit';
import {login, setUser} from '.';
import {makeId} from '../../../api/utils';

const userListenerMiddleware = createListenerMiddleware();

const handleLogin = async (action: any, listenersApi: any) => {
  listenersApi.cancelActiveListeners();
  console.log('Intercepting login');
  listenersApi.dispatch(
    setUser({
      ...action.payload,
      authToken: makeId(7), // Make a dummy token
    }),
  );
};

userListenerMiddleware.startListening({
  matcher: isAnyOf(login),
  effect: handleLogin,
});

export default userListenerMiddleware;
