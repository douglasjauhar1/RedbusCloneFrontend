import { combineReducers } from 'redux';

const selectDate = (state = {}, action) => {

  switch (action.type) {    
    case "SELECT_JOURNEY_DATE":
        return {
          isLoading: false,
          isError: false,
          isSuccess: true,
          journeyDate: action.payload,
          errors: null
        }

    case "SELECT_JOURNEY_FAIL":
        return {
          isLoading: false,
          isError: true,
          isSuccess: false,
          journeyDate: null,
          errors: action.payload
        }

    default:
      return state;
  }
}

const selectCity = (state = {}, action) => {
// console.warn(action)
  switch (action.type) {    
    case "SELECT_CITY_SUCCESS":
        return {
          isLoading: false,
          isError: false,
          isSuccess: true,
          cityNm: action.payload.name,
          cityId: action.payload.id,
          errors: null
        }

    case "SELECT_CITY_FAIL":
        return {
          isLoading: false,
          isError: true,
          isSuccess: false,
          city: null,
          errors: action.payload
        }

    default:
      return state;
  }
}

const selectDest = (state = {}, action) => {

  switch (action.type) {    
    case "SELECT_DEST_SUCCESS":
        return {
          isLoading: false,
          isError: false,
          isSuccess: true,
          destNm: action.payload.name,
          destId: action.payload.id,
          errors: null
        }

    case "SELECT_DEST_FAIL":
        return {
          isLoading: false,
          isError: true,
          isSuccess: false,
          city: null,
          errors: action.payload
        }

    default:
      return state;
  }
}


export default combineReducers({
    selectDate,
    selectCity,
    selectDest
});
