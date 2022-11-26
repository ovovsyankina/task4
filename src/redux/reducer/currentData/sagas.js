import { all, call, put, takeEvery } from "redux-saga/effects";
import { getCurrentFilmApi } from "../../../api";
import { getCurrentDataSuccess } from "./actions";
import { CURRENT_DATA } from "./constants";

function* getCurrentFilm({ payload }) {
  try {
    console.log("get/films/id");
    const response = yield call(getCurrentFilmApi, payload);
    yield put(getCurrentDataSuccess(response));
  } catch (err) {
    yield console.error(err);
  }
}
export default function* currentDataSagas() {
  yield all([takeEvery(CURRENT_DATA, getCurrentFilm)]);
}
