import { createSelector } from 'reselect';

const selectAuthState = (state) => state.auth;

export const selectIsAuthenticated = createSelector(
  [selectAuthState],
  (auth) => auth.isAuthenticated
);

export const selectUserProfile = createSelector(
  [selectAuthState],
  (auth) => auth.user
);

export const selectAuthStatus = createSelector(
  [selectAuthState],
  (auth) => auth.status
);