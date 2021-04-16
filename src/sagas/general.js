import { all, call, put, takeLatest } from 'redux-saga/effects'

import * as generalActions from '../actions/general'
import {
  getTopicApi,
  getTopicPhotosApi, likePhotoApi,
} from "../requests/general";
import {select, takeLeading} from "@redux-saga/core/effects";

export function* getTopic(action) {
  try {
    const response = yield call(getTopicApi, action.data);
    yield put({type: generalActions.GET_TOPIC_SUCCESS, data: response.data});
  } catch (e) {
    yield put({ type: generalActions.GET_TOPIC_FAILED, error: e.response });
  }
}

export function* getTopicPhotos(action) {
  try {
    const response = yield call(getTopicPhotosApi, action.data);
    yield put({type: generalActions.GET_TOPIC_PHOTOS_SUCCESS, data: response.data});
  } catch (e) {
    yield put({ type: generalActions.GET_TOPIC_PHOTOS_FAILED, error: e.response });
  }
}

export function* likePhoto(action) {
  try {
    const response = yield call(likePhotoApi, action.data);
    const topicPhotos = yield select(state => state.general.topicPhotos);
    const updatedPhotos = topicPhotos.map(item => action.data === item.id ? response.data.photo : item);
    yield put({type: generalActions.LIKE_PHOTO_SUCCESS, data: updatedPhotos});
  } catch (e) {
    yield put({ type: generalActions.LIKE_PHOTO_FAILED, error: e.response });
  }
}

export default all([
  takeLatest(generalActions.GET_TOPIC_REQUEST, getTopic),
  takeLatest(generalActions.GET_TOPIC_PHOTOS_REQUEST, getTopicPhotos),
  takeLeading(generalActions.LIKE_PHOTO_REQUEST, likePhoto),
])