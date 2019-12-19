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

export default combineReducers({
    selectDate
});
