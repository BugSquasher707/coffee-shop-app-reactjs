import { createStore, combineReducers } from "redux";
import { reducer1 } from "../reducer/reducer";

const rootReducer = combineReducers({reducer1})

const store = createStore(rootReducer)

export default store 