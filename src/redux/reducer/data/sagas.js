import { all, call, put, select, takeEvery } from "redux-saga/effects";
import {
  deleteFilmApi,
  getFavoriteFilmsApi,
  getFavoriteFilmsCountApi,
  getFilmsApi,
  postFilmApi,
  putFilmApi,
} from "../../../api";
import { dataSelector } from "../../selectors";
import { setSnackBar } from "../snackBar/actions";
import {
  addDataSuccess,
  deleteDataItemSuccess,
  favoriteFilmsCountSuccess,
  filteredFilm,
  getDataSuccess,
  getFavoriteDataSuccess,
  putEditDataItemSuccess,
} from "./actions";
import {
  ADD_DATA,
  DELETE_DATA_ITEM,
  FAVORITE_FILM_COUNT,
  GET_DATA,
  GET_DATA_FAVORITE,
  PUT_EDIT_DATA_ITEM,
} from "./constants";

function* getFilms({ payload }) {
  try {
    const response = yield call(getFilmsApi, payload);
    yield put(getDataSuccess(response));
  } catch (err) {
    yield console.error(err);
  }
}
function* getFavoriteFilms({ payload }) {
  try {
    const response = yield call(getFavoriteFilmsApi, payload);
    yield put(getFavoriteDataSuccess(response));
  } catch (err) {
    yield console.error(err);
  }
}
function* getFavoriteFilmsCount() {
  try {
    const response = yield call(getFavoriteFilmsCountApi, {});
    yield put(
      favoriteFilmsCountSuccess(
        response && response.length > 0 ? response.length : "0"
      )
    );
  } catch (err) {
    yield console.error(err);
  }
}

function* postFilm({ payload }) {
  try {
    const dataArr = yield select(dataSelector);
    if (
      dataArr.some(
        (item) =>
          payload.title === item.title &&
          payload.yearRelease === item.yearRelease
      )
    ) {
      yield put(setSnackBar("Фильм с таким названием и годом уже существует"));
    } else {
      const response = yield call(postFilmApi, payload);
      yield put(addDataSuccess(response));
    }
  } catch (err) {
    yield console.error(err);
  }
}

function* putFilm({ payload }) {
  try {
    const dataArr = yield select(dataSelector);
    if (
      dataArr.some(
        (item) =>
          payload.dataFilm.title === item.title &&
          payload.dataFilm.yearRelease === item.yearRelease &&
          payload.dataFilm.isFavorite === item.isFavorite
      )
    ) {
      yield put(setSnackBar("Фильм с таким названием и годом уже существует"));
    } else {
      const response = yield call(putFilmApi, payload);
      yield put(putEditDataItemSuccess(response));
      if (response.isFavorite === false) {
        yield put(filteredFilm(response.id));
      }
    }
  } catch (err) {
    yield console.error(err);
  }
}

function* deleteFilm({ payload }) {
  try {
    yield call(deleteFilmApi, payload);
    yield put(deleteDataItemSuccess(payload));
  } catch (err) {
    yield console.error(err);
  }
}

export default function* dataSagas() {
  yield all([takeEvery(GET_DATA, getFilms)]);
  yield all([takeEvery(ADD_DATA, postFilm)]);
  yield all([takeEvery(PUT_EDIT_DATA_ITEM, putFilm)]);
  yield all([takeEvery(DELETE_DATA_ITEM, deleteFilm)]);
  yield all([takeEvery(GET_DATA_FAVORITE, getFavoriteFilms)]);
  yield all([takeEvery(FAVORITE_FILM_COUNT, getFavoriteFilmsCount)]);
}
