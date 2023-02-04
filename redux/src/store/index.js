import {applyMiddleware, combineReducers, createStore} from "redux";
import {moneyReducer} from "./moneyReducer";
import {customerReducer} from "./customerReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  money: moneyReducer,
  customers: customerReducer
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
