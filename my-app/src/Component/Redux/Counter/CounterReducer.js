import { DECREMENT, INCREMENT, INCREMENTBY5 } from "./CounterType";

const intialState = {
    count: 0,
    count2:10
}
const counterreducer = (state = intialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case INCREMENTBY5:
            return {
                ...state,
                count2: state.count2 +action.payLoad
            }

        default:
            return state
    }
}
export default counterreducer