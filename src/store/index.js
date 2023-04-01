import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import { hotelsWatcher } from '../saga/hotelsSaga';
import { favoriteHotelsReducer } from './favoriteHotelsReducer';
import { hotelsReducer } from './hotelsReducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers(
  {
    favorites: favoriteHotelsReducer,
    hotels: hotelsReducer
  }
)

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(hotelsWatcher);