import { FETCH_HOTELS, SET_HOTELS } from "../utils/consts";

const defaultState = {
  hotels: [],
}

export const hotelsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_HOTELS:
      return { ...state, hotels: action.payload }
    default:
      return state
  }
}
export const fetchHotelsAction = (query) => ({ type: FETCH_HOTELS, query });
export const setHotelsAction = (payload) => ({ type: SET_HOTELS, payload });
