import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogged: false,
    user: null,
  },
  reducers: {
    clearCredentials(state) {
      state.isLogged = false;
      (state.user.name = null), (state.user.password = null);
    },
    login(state, { payload }) {
      state.isLogged = true;
      state.user = payload;
    },
  },
});

export const authActions = authSlice.actions;

export const authReducer = authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;

export const selectIsLogged = (state) => state.auth.isLogged;
