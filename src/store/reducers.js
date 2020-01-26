import { combineReducers } from "redux";
import translate from "./translate/reducer";

const rootReducer = combineReducers({ translate });

export default rootReducer;
