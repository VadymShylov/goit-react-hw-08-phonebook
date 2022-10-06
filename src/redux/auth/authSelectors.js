export const getLoggedIn = state => state.auth.isLoggedIn;

export const getUserEmail = state => state.auth.user.email;

export const getMustContats = state =>
  state.auth.user.email && !state.contacts.items;
