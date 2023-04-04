import { put, takeEvery, call } from 'redux-saga/effects';
import { setHotelsAction, FETCH_HOTELS } from '../store/hotelsReducer';

const fetchHotels = (query) => fetch(query);


function* fetchHotelsWorker(action) {
  const data = yield call(fetchHotels, action.query)
  const json = yield call(() => new Promise(res => res(data.json())))
  yield put(setHotelsAction(json))
}

export function* hotelsWatcher() {
  yield takeEvery(FETCH_HOTELS, fetchHotelsWorker)
}