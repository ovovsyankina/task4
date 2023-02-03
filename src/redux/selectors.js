import { createSelector } from "reselect";

export const dataSelector = createSelector(
  (state) => state,
  (state) => {
    return state.data.data;
  }
);

export const currentDataSelector = createSelector(
  (state) => state,
  (state) => {
    return state.currentData;
  }
);

export const filterDataSelector = createSelector(
  (state) => state,
  (state) => {
    return state.filter;
  }
);

export const favoriteDataSelector = createSelector(
  (state) => state,
  (state) => {
    return state.data.favoriteData;
  }
);

export const favoriteCountSelector = createSelector(
  (state) => state,
  (state) => {
    return state.data.favoriteCount;
  }
);

export const snackBarTextSelector = createSelector(
  (state) => state,
  (state) => {
    return state.snackBar;
  }
);
