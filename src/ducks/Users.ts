import { Dispatch } from 'redux'
import { IServices } from '../services'

export interface ILogin {
    email: string
    password: string
}

export default function reducer(state = {}){
    return state
}

export const login = ({email, password}: ILogin) => 
 async (dispatch: Dispatch, getState: () => any, { auth } : IServices) => {
    try{
        const result = await auth.signInWithEmailAndPassword(email, password)
        console.log(result)
    } catch(error){
        console.log("valio")
    }
    
 }


/*  export default payload =>
    async (dispatch, getState) => {
        dispatch(fetchStart())
        try {
            const result = await fetch(url)
            const json = await result.json()
            dispatch(fetchSucess(json))
            console.log(json)
        } catch (error) {
            dispatch(fetchError(error))
        }
    } */