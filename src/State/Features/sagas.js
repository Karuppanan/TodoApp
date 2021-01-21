import { all } from 'redux-saga/effects';

import {combinedSaga as App} from './App';

export default function* rootSaga() {
  yield all([
    App(),
  ]);
}
