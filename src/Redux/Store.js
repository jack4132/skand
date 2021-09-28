import { reducer } from "./Reducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

export const Store = () => {
    const store = createStore(
        combineReducers({
            reducer
        }),
        applyMiddleware(thunk)
    );
    return store;
}