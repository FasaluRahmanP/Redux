import { combineReducers } from "redux";
import counterreducer from "./Counter/CounterReducer";
import { formreducer } from "./Form/FormReducer";
export const rootReducer = combineReducers({
    counter: counterreducer,
    form: formreducer
})