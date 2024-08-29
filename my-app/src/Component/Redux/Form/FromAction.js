import SUBMIT_FORM from "./FormType"

const SubmitForm=({name,age})=>{
    return{
        type:SUBMIT_FORM,
        payload:{name,age}
    }
}
export default SubmitForm