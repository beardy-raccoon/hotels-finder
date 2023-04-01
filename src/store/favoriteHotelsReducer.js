const defaultState = {
  favorites: [],
}

const ADD_FAVORITE = "ADD_FAVORITE";
const DEL_FAVORITE = "DEL_FAVORITE";

export const favoriteHotelsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {...state, favorites: [...state.favorites, action.payload]}
    case DEL_FAVORITE:
      return {...state, favorites: state.favorites.filter(hotel => hotel.hotelId !== action.payload)}
    default:
      return state
  }
}

export const addFavoriteAction = (payload) => ({ type: ADD_FAVORITE, payload});
export const delFavoriteAction = (payload) => ({ type: DEL_FAVORITE, payload});