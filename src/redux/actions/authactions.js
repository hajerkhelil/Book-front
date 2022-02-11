

import { REGISTER, FAIL, LOGIN, LOGOUT, GET_CURRENT, CLEARERRORS, GET_USERS } from './../types/authtypes';
import axios from "axios"


export const register= (newuser, Navigate) => async (dispatch) =>{

    try {
        //7kit m3a l back 
        const res= await axios.post('/authe/signUp', newuser)
        dispatch({type:REGISTER, payload: res.data})
        Navigate('/profile')

    } catch (error) {
        dispatch({type:FAIL, payload: error.response.data})
    }
}

export const login = (user, Navigate) => async (dispatch) =>{

    try {
        
        const res= await axios.post('/authe/logIn', user)
        dispatch({type: LOGIN, payload: res.data})
        console.log(res.data)

        if(res.data.user.role=="user")
        { return Navigate('/profile')}
        if(res.data.user.role=="admin")
        { return Navigate('/admin')}

    } catch (error) {
      
     dispatch({type: FAIL, payload: error.response.data}) // errors mel back 
    }
}

export const logout=()=>{
    return {type:LOGOUT}
}


export const getcurrent= ()=> async (dispatch) => {

    const token=localStorage.getItem("token")
    const config={
        headers: {
         authorization: token,
        }
    }
    try {
        const res= await axios.get('/authe/current', config)
        dispatch({type: GET_CURRENT, payload: res.data})
    } catch (error) {
        console.log(error);
    }

}


export const clearerrors = () => {
    return {type: CLEARERRORS}
}



export const getusers= ()=> async (dispatch) => {

    const token=localStorage.getItem("token")
    const config={
        headers: {
         authorization: token,
        }
    }
    try {
        console.log("hi")
        const res= await axios.get('/authe/allusers', config)
        dispatch({type: GET_USERS, payload: res.data})
        console.log(res.data)
    } catch (error) {
        console.log(error);
    }

}
