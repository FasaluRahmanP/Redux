import { DECREMENT, INCREMENT, INCREMENTBY5 } from "./CounterType";

export const increment=()=>{
    return{
        type:INCREMENT
    }
}

export const decrement=()=>{
    return{
        type:DECREMENT
    }
}
export const incrementby5=()=>{
    return{
        type:INCREMENTBY5,
        payLoad:5
    }
}
