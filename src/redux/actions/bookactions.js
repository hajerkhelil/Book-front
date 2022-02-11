

import  axios  from 'axios';

import { GET_BOOK, GET_BOOKS } from '../types/booktypes';


export  const  getbooks=()=> async (dispatch) =>{
    try {
  

        // speak with back
        const res= await axios.get('/boook/AllBooks')
        // speak with reduvcer
        dispatch({type: GET_BOOKS, payload: res.data})
        console.log(res.data)
    } catch (error) {
        console.log(error)

    }
}

// only the admin should add books 
export const addbook=(newbook) => async (dispatch)=>{

   const  config={
        headers: {
            authorization:localStorage.getItem('token')
        }
    }
    try {

        const res= await axios.post('/boook/AddBook', newbook,config)
        dispatch(getbooks())

    } catch (error) {
        console.log(error)

    }
}


export const getbook=(id) => async (dispatch) =>{
    try {
        const res= await axios.get(`/boook/OneBook/${id}`)
        dispatch({type: GET_BOOK, payload: res.data})
    } catch (error) {
        console.log(error)

    }
}

export const deletebook=(id) => async(dispatch) =>{
   try {
        const res= await axios.get(`/boook/DeleteBook/${id}`)
        dispatch(getbooks())
    } catch (error) {
        console.log(error)

    }
}

export const editbook=(id) => async (dispatch) =>{
  try {
        const res= await axios.put(`/boook/UpdateBook/${id}`)
        dispatch(getbooks())
    } catch (error) {
        console.log(error)

    }
}


