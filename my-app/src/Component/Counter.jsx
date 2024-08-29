import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementby5 } from "./Redux/Counter/CounterAction";

 const Counter=()=>{
    const count=useSelector((state)=>state.counter.count)
    const count2=useSelector((state)=>state.counter.count2)
    const dispatch=useDispatch()
    return(
        <div>
            Count:{count}
            <br></br>
            Count2:{count2}
            <br></br>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
            <button onClick={()=>dispatch(incrementby5())}>Incrementby5</button>
        </div>
    )
}
export default Counter