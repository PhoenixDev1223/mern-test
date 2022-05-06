import * as actionTypes from '../types';

const INITIAL_STATE = {
    cars: []
}

const authReducer = (state = INITIAL_STATE, action) => {
    const {
        payload = null
    } = action;
    switch (action.type) {
        case actionTypes.SET_CARS:
            state.cars = payload;
            return {
                ...state
            };
        default:
            return state;
    }
};

export default authReducer;