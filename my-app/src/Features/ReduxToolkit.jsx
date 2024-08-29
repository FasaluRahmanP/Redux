import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, decrementby5, increment, incrementby5 } from './CounterSlice'
import Form from '../Component/Form'

const ReduxToolkit = () => {
    const {count1,count2}=useSelector((state)=>state.counter)
    const{name,age}=useSelector(state=>state.Form)
    const dispatch=useDispatch()
  return (
    <div>
    <h1>Redux Toolkit</h1>
    <h2>Count:{count1}</h2>
    <h2>Count2:{count2}</h2>
    <button onClick={()=>dispatch(increment())}>Increment</button>
    <button onClick={()=>dispatch(decrement())}>Decrement</button>
    <br></br>
    <button onClick={()=>dispatch(incrementby5())}>Incrementby5</button>
    <button onClick={()=>dispatch(decrementby5())}>Decrementby5</button>
    {/* <Form/> */}
    <h1>name:{name}</h1>
    age:{age}
    </div>
  )
}

export default ReduxToolkit