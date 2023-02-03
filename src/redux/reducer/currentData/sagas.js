import { all, call, put, takeEvery } from "redux-saga/effects";
import { getCurrentFilmApi } from "../../../api";
import { history } from "../../../utils";
import { setSnackBar } from "../snackBar/actions";
import { getCurrentDataSuccess } from "./actions";
import { CURRENT_DATA } from "./constants";

function* getCurrentFilm({ payload }) {
  try {
    const response = yield call(getCurrentFilmApi, payload);
    yield put(getCurrentDataSuccess(response));
  } catch (err) {
    if (err.toString() === "Error: 404") {
      history.back();
      yield put(setSnackBar("такого фильма не существует"));
    }
    yield console.error(err);
  }
}
export default function* currentDataSagas() {
  yield all([takeEvery(CURRENT_DATA, getCurrentFilm)]);
}
