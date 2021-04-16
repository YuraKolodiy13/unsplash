import { all } from 'redux-saga/effects';
import general from "./general";
import auth from "./auth";

export default function* rootSaga() {
  yield all([
    auth,
    general,
  ])
}