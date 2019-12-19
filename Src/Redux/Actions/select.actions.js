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