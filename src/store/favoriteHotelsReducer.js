const defaultState = {
  favorites: [],
}
const SET_FAVORITES = "SET_FAVORITES";
const ADD_FAVORITE = "ADD_FAVORITE";
const DEL_FAVORITE = "DEL_FAVORITE";

export const favoriteHotelsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_FAVORITES:
      return {...state, favorites: action.payload}
    case ADD_FAVORITE:
      return {...state, favorites: [...state.favorites, action.payload]}
    case DEL_FAVORITE:
      return {...state, favorites: state.favorites.filter(hotel => hotel.hotelId !== action.payload)}
    default:
      return state
  }
}

export const setFavoritesAction = (payload) => ({ type: SET_FAVORITES, payload});
export const addFavoriteAction = (payload) => ({ type: ADD_FAVORITE, payload});
export const delFavoriteAction = (payload) => ({ type: DEL_FAVORITE, payload});