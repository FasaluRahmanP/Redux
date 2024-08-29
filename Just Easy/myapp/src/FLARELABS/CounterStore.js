import { createStore } from "redux";
import { counterReducer } from "./CounterReducer";

export const CounterStore=createStore(counterReducer)