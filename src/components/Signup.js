import React, { useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom';
import { clearerrors } from '../redux/actions/authactions';
import {Form, Button} from 'react-bootstrap'
import {register} from '../redux/actions/authactions'

function Signup() {

    const [email, setemail]= useState('')
    const [password, setpassword]= useState('')
    const Navigate= useNavigate();
    const dispatch= useDispatch()
    const errors= useSelector(state => state.authReducer.errors)

    useEffect(() => {
        {errors && errors.map((el) => alert(el.msg))}
        return () => {
      dispatch(clearerrors())  }
      }, [errors])

  return <div>


<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control 
    onChange={(e) => setemail(e.target.value)}
    value={email}
    type="email" placeholder="Enter email" />

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onChange={(e) => setpassword(e.target.value)}
        value={password}
        type="password" placeholder="Password" />
  </Form.Group>



  <Button onClick={(e) => {e.preventDefault(); dispatch(register({email,password}, Navigate))}}
  variant="primary" type="submit">
   Sign Up
  </Button>
</Form>




  </div>;
}

export default Signup;
