import { put, takeEvery, call } from 'redux-saga/effects';
import { setHotelsAction } from '../store/hotelsReducer';
import { FETCH_HOTELS } from '../utils/consts';
import mainApi from '../utils/mainApi';

const fetch = (query) => mainApi(query);

function* fetchHotelsWorker(action) {
  const data = yield call(fetch, action.query);
  yield put(setHotelsAction(data));
}

export function* hotelsWatcher() {
  yield takeEvery(FETCH_HOTELS, fetchHotelsWorker);
}