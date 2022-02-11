
import React , {useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getcurrent } from '../redux/actions/authactions';
 


function Profile() {

    const dispatch= useDispatch();
    useEffect(() => {
        dispatch(getcurrent())
    })
    const user=  useSelector(state => state.authReducer.user)
    

    
    return (
        <div>
            <h1>hello {user && user.email}</h1>
        </div>
    )
}

export default Profile