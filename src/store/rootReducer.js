import { combineReducers } from "redux";
import CvReducer from "./reducers/CvReducer";

const rootReducer = combineReducers({
    cv: CvReducer,
    
}) 

export default rootReducer;