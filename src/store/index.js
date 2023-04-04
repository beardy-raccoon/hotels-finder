import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import { hotelsWatcher } from '../saga/hotelsSaga';
import { favoriteHotelsReducer } from './favoriteHotelsReducer';
import { hotelsReducer } from './hotelsReducer';
import { queryReducer } from './queryReducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers(
  {
    favorites: favoriteHotelsReducer,
    hotels: hotelsReducer,
    query: queryReducer,
  }
)

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(hotelsWatcher);