import {createSlice} from '@reduxjs/toolkit';

export const AUTH_TOKEN_EXPIRY = 15 * 60 * 60 * 1000; // 15 minutes

interface UserState {
  user: {
    username: string | null;
    authToken: string | null;
  };
}

const initialState: UserState = {
  user: {
    username: null,
    authToken: null,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, _) => {},
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: state => {
      state.user = {
        username: null,
        authToken: null,
      };
    },
  },
});

export const {login, logout, setUser} = userSlice.actions;

export default userSlice.reducer;
