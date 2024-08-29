import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './CounterAction'

function CounterApp() {
  const countResult=useSelector((state)=>state.count)
  const dispatch=useDispatch()  
    return (
        <div>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
            Count:{countResult}
            <button onClick={()=>dispatch(increment())}>Increment</button>
        </div>
    )
}

export default CounterApp