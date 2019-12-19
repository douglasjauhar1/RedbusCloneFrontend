export const selectDate = (payload) => {
  return async (dispatch) => {

      try {
        dispatch({
          type: "SELECT_JOURNEY_DATE",
          payload: payload
        });

      } catch (error) {
          dispatch({
              type: "SELECT_JOURNEY_FAIL",
              payload: error
          });
          return error;
      }
  }
}

export const selectCity = (payload) => {
  // console.warn(payload)
  return async (dispatch) => {
      try {
        await dispatch({
          type: "SELECT_CITY_SUCCESS",
          payload: payload
        });

      } catch (error) {
          dispatch({
              type: "SELECT_CITY_FAIL",
              payload: error
          });
          return error;
      }
  }
}

export const selectDest = (payload) => {
  return async (dispatch) => {

      try {
        dispatch({
          type: "SELECT_DEST_SUCCESS",
          payload: payload
        });

      } catch (error) {
          dispatch({
              type: "SELECT_DEST_FAIL",
              payload: error
          });
          return error;
      }
  }
}