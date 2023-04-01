import { put, takeEvery, call } from 'redux-saga/effects';
import { setHotelsAction, FETCH_HOTELS } from '../store/hotelsReducer';

const fetchHotels = () => fetch('http://engine.hotellook.com/api/v2/cache.json?location=Moscow&currency=rub&checkIn=2023-04-01&checkOut=2023-04-02')

function* fetchHotelsWorker() {
  const data = yield call(fetchHotels)
  const json = yield call(() => new Promise(res => res(data.json())))
  yield put(setHotelsAction(json))
}

export function* hotelsWatcher() {
  yield takeEvery(FETCH_HOTELS, fetchHotelsWorker)
}