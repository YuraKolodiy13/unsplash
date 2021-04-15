import { all, select, call, put, takeLatest } from 'redux-saga/effects'

import * as generalActions from '../actions/general'
import {
  getTopicApi,
  getTopicsApi,
} from "../requests/general";

export function* getTopics() {
  try {
    const response = yield call(getTopicsApi);
    yield put({type: generalActions.GET_TOPICS_SUCCESS, data: response.data});
  } catch (e) {
    yield put({ type: generalActions.GET_TOPICS_FAILED, error: e.response });
  }
}

export function* getTopic(action) {
  try {
    const response = yield call(getTopicApi, action.data);
    yield put({type: generalActions.GET_TOPIC_SUCCESS, data: response.data});
  } catch (e) {
    yield put({ type: generalActions.GET_TOPIC_FAILED, error: e.response });
  }
}

export default all([
  takeLatest(generalActions.GET_TOPICS_REQUEST, getTopics),
  takeLatest(generalActions.GET_TOPIC_REQUEST, getTopic),
])