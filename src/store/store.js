import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import { taskReducer } from "./task.reducer";

const rootReducer = combineReducers({
    taskModule: taskReducer,
})



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))