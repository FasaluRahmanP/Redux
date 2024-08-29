import { configureStore  } from "@reduxjs/toolkit";
import CounterSlice from "../Features/CounterSlice";
import Form from "../Component/Form";
const storee=configureStore({
    reducer:{
    counter:CounterSlice,
    form:Form
}
})
export default storee