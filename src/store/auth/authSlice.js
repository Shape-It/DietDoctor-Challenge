import { authService } from '@/services';
import { createSlice } from '@reduxjs/toolkit';

function successLoginHandler(state, { payload }) {
  state.user = payload.user;
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    hasSeenOnboarding: false,
    user: null,
  },
  reducers: {
    clearCredentials(state) {
      state.hasSeenOnboarding = false;
      state.user = null;
    },
    changeOnboardingVisibility(state) {
      state.hasSeenOnboarding = true;
    },
  },
  extraReducers(builder) {
    builder.addMatcher(authService.endpoints.login.matchFulfilled, successLoginHandler);
  },
});

export const authActions = authSlice.actions;

export const authReducer = authSlice.reducer;

export const selectHasSeenOnboarding = (state) => state.auth.hasSeenOnboarding;

export const selectCurrentUser = (state) => state.auth.user;
