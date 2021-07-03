import { combineReducers } from "redux";
import fetchCats from "./fetchCats";

const rootReducer = combineReducers({
    fetchCats: fetchCats
})

export default rootReducer