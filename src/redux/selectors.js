import { createSelector } from "reselect";

export const dataSelector = createSelector(
  (state) => state,
  (state) => {
    return state.data;
  }
);
export const currentDataSelector = createSelector(
  (state) => state,
  (state) => {
    return state.currentData;
  }
);
