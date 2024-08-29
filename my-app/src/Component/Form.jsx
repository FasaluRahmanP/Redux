import { useState } from "react"
import { useDispatch } from "react-redux"
import SubmitForm from "./Redux/Form/FromAction"

const Form = () => {
    const [name, SetName] = useState("")
    const [age, SetAge] = useState(0)
    const dispatch=useDispatch()

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            margin: "24px"
        }}>
            <input style={{
                width: "200px"
            }}
                value={name}
                onChange={(e) => SetName(e.target.value)}
                type="text"
                placeholder="Enter Name"
            />

            <input style={{
                width: "200px"
            }}
                value={age}
                onChange={(e) => SetAge(e.target.value)}
                type="text"
                placeholder="Enter Age"
            />

            <button style={{margin:"24px"}} onClick={()=>dispatch(SubmitForm({name,age}))}>Submit</button>
        </div>
    )
}
export default Form