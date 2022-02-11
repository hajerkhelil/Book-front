
import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

function PrivateRoute({children}) {

    const auth= useSelector(state => state.authReducer.auth)
    const token = localStorage.getItem("token")
    const user= useSelector(state => state.authReducer.user)

    return   (token  ||  auth ) && user.role == "user" ? children :  <Navigate to='/Signup' ></Navigate> ;
   
}
export default PrivateRoute