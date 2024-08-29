import SUBMIT_FORM from "./FormType"

const intialState={
    Name:"empty",
    Age:0
}

export const formreducer=(state=intialState,{type,payload})=>{
switch (type) {

    case SUBMIT_FORM:
        return{
            ...state,
            name:payload.name,
            age:payload.age
        }

    default:
        return state
}
}