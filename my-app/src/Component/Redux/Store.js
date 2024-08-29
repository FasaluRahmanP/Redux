import { createStore } from "redux";
import counterreducer from "./Counter/CounterReducer";
import { rootReducer } from "./RootReducer";

// const store=createStore(counterreducer)
const store=createStore(rootReducer)

export default store