const defaultState = {
  hotels: [],
  favorites: [],
}

export const FETCH_HOTELS = "FETCH_HOTELS"
export const SET_HOTELS = "SET_HOTELS";

export const hotelsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_HOTELS:
      return { ...state, hotels: action.payload }
    default:
      return state
  }
}
export const fetchHotels = () => ({ type: FETCH_HOTELS });
export const setHotelsAction = (payload) => ({ type: SET_HOTELS, payload });
