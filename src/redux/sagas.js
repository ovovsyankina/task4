import dataSagas from "./reducer/data/sagas";
import currentDataSagas from "./reducer/currentData/sagas";
import { all } from "redux-saga/effects";

export const rootSaga = function* rootSaga() {
  yield all([dataSagas(), currentDataSagas()]);
};
