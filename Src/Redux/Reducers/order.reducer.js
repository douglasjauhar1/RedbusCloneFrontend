const initialState = {
  id: 0,
}

const orderReducer = (state = initialState, action) => {
  console.log('reducer',action.id);
  
  switch (action.type) {
    case 'GET_ORDER': {
      return {
        ...state,
        id: action.id,
      }
    }

    default: {
      return state
    }
  }
}

export default orderReducer