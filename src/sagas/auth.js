import { all, call, put, takeLatest } from 'redux-saga/effects'

import * as authActions from '../actions/auth'
import {loginApi} from "../requests/auth";

export function* login(action) {
  try {
    const response = yield call(loginApi, action.data);
    localStorage.setItem('token', `${response.data.token_type} ${response.data.access_token}`);
    yield put({type: authActions.LOGIN_SUCCESS, data: response.data});
  } catch (e) {
    yield put({ type: authActions.LOGIN_FAILED, error: e.response });
  }
}

export default all([
  takeLatest(authActions.LOGIN_REQUEST, login),
])