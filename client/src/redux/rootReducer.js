import { combineReducers } from "redux";
import carReducer from "./reducers/carReducer.js";

const rootReducer = combineReducers({
    car: carReducer
});

export default rootReducer;