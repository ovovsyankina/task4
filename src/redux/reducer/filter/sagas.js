import { all, call, put, takeEvery } from "redux-saga/effects";
import { getFilterFilmApi } from "../../../api";
import { searchFilmSuccess } from "./actions";
import { SEARCH_FILTER } from "./constants";

function* getFilterFilm({ searchValue }) {
  try {
    yield call(getFilterFilmApi, searchValue);
    yield put(searchFilmSuccess(searchValue));
  } catch (err) {
    yield console.error(err);
  }
}
export default function* filterSagas() {
  yield all([takeEvery(SEARCH_FILTER, getFilterFilm)]);
}
