import { takeEvery } from 'redux-saga';
import { fork, call } from 'redux-saga/effects';

import * as ActionTypes from 'constants/actionTypes';
import * as Api from 'effects/api';

function* onHireMeFormSubmitted({ payload }) {
  const {
    email,
    phone,
    note
  } = payload;

  try {
    yield call(Api.submitHireMeForm, email, phone, note);
  } catch (ex) {
    console.error(ex);
  }
}

export default function* () {
  yield [
    fork(takeEvery, ActionTypes.HIRE_ME_FORM_SUBMITTED, onHireMeFormSubmitted)
  ];
}
