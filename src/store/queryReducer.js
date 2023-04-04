import getCurrentDate from "../utils/getCurrentDate";

const defaultState = {
  query: {
    city: 'Москва',
    checkinDate: `${getCurrentDate()}`,
    duration: '1'
  },
}

export const SET_QUERY = "SET_QUERY";

export const queryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_QUERY:
      return { ...state, query: action.payload }
    default:
      return state
  }
}

export const setQueryAction = (payload) => ({ type: SET_QUERY, payload });