/* eslint-disable import/no-anonymous-default-export */
const INCREMENT = "COUNT/INCREMENT"
const DECREMENT = "COUNT/DECREMENT"
const SET = "COUNT/SET"

export const increment = () =>({
    type: INCREMENT,
})

export const decrement = () =>({
    type: DECREMENT,
})

export const set = (payload: any) =>({
    type: SET,
    payload,
})



const initialState = 0
//reducers must return inmutable states
export default function (state = initialState, action: { type: any; payload: any }){
    switch(action.type){
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1
        case SET:
            return action.payload
        default:
            return state
    }
}