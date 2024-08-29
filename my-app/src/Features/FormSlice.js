import { createSlice } from "@reduxjs/toolkit";

const initialState={
name:"empty",
age:0
}

const FormSlice=createSlice({
    name:"Form",
    initialState,
    reducers:{
        submit:(state,action)=>{

        }
    }
})
export default FormSlice.reducer
export const{submit}=FormSlice.actions