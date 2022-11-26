import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  deleteFilmApi,
  getFilmsApi,
  postFilmApi,
  putFilmApi,
} from "../../../api";
import {
  addDataSuccess,
  deleteDataItemSuccess,
  getDataSuccess,
  putEditDataItemSuccess,
} from "./actions";
import {
  ADD_DATA,
  DELETE_DATA_ITEM,
  GET_DATA,
  PUT_EDIT_DATA_ITEM,
} from "./constants";

function* getFilms() {
  try {
    console.log("get/films");
    const response = yield call(getFilmsApi, {});
    yield put(getDataSuccess(response));
  } catch (err) {
    yield console.error(err);
  }
}

function* postFilm({ payload }) {
  try {
    console.log("post/film");
    const response = yield call(postFilmApi, payload);
    yield put(addDataSuccess(response));
  } catch (err) {
    yield console.error(err);
  }
}

function* putFilm({ payload }) {
  try {
    console.log("put/film");
    const response = yield call(putFilmApi, payload);
    yield put(putEditDataItemSuccess(response));
  } catch (err) {
    yield console.error(err);
  }
}

function* deleteFilm({ payload }) {
  try {
    console.log("delete/film/", payload);
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
}
