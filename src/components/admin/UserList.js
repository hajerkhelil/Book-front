
import React , {useEffect}  from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getusers } from '../../redux/actions/authactions';
import AdminProfile from './AdminProfile';

function UserList() {
     const users = useSelector((state) => state.authReducer.users);
    // const dispatch= useDispatch()

    //  useEffect(() => {
    //     dispatch(getusers())
    // }, )

  return <div>

 {users && users.map((user) => (
      
        <AdminProfile  user={user}  ></AdminProfile>

      ))} 

  </div>;
}

export default UserList;

