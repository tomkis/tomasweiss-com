import { fork } from 'redux-saga/effects';

import hireMeSaga from 'sagas/hireMeSaga';

export default function* () {
  yield [
    fork(hireMeSaga)
  ];
}
