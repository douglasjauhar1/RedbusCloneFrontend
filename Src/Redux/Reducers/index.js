import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import authReducer from "./auth.reducer";
import userReducer from "./user.reducer";
import selectReducer from "./select.reducer"
import orderReducer from "./order.reducer"


const reducers = {
    authReducer,
    userReducer,
    selectReducer,
    orderReducer,
    form: formReducer
};

const appReducer = combineReducers(reducers);

const rootReducer = (state, action) => {

    if (action.type === "USER_LOGGED_OUT_SUCCESS") {
        state = {}
    }

    return appReducer(state, action);
}

export default rootReducer;
