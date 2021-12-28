import {combineReducers} from "redux";
import {tableReducer} from "./tableReducer";

const reducers = combineReducers({
    allRows : tableReducer,
});

export default reducers;