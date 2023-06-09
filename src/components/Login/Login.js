import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../../features/User'


function Login() {

  const dispatch = useDispatch()

  return (
    <div>
        <button onClick={()=> {
                dispatch(login({ name: 'Artem', age: 36, email: 'tema@tema.com'}))}}
              >Login</button>
        <button onClick={()=> dispatch(logout())}>logOut</button>
    </div>
  )
}

export default Login