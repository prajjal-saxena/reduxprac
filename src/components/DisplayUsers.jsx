import React from 'react'
import { MdDeleteForever } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../store/slices/UserSlice';

const DisplayUsers = () => {
    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state.users;
    })
    console.log(data)
  
  const deleteUser = (id) => {
    dispatch(removeUser(id));
  }
  return (
    <div>
      {
        data?.map((user,id) => {
            return <li style={{display:"flex",justifyContent:"space-between",marginBottom:"2px"}} key={id}>{user}
            <button onClick={()=> deleteUser(id)}><MdDeleteForever className='delete-icon'/></button></li>
        })
      }
    </div>
  )
}

export default DisplayUsers
