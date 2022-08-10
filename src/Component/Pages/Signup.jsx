import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../AuthContext'

export const Signup = () => {
    const loggedInuser = useContext(UserContext)
    const navigate = useNavigate()
    const [userInfo, setUserName] = useState({
        username:'',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const userList = JSON.parse(localStorage.getItem('users'));
        userList.push(userInfo)
        localStorage.setItem('users', JSON.stringify(userList));
        loggedInuser.setUser(userInfo)
        navigate('/')
    }

  return (
    <>
        <h2>SignUp</h2>
        <form onSubmit={handleSubmit}>
            <br/>
            <label htmlFor="username">UserName</label>
            <input id='username' type="text" onChange={(e) => setUserName({...userInfo, username: e.target.value})}/>
            <br/>
            <br/>
            <label htmlFor="password">Password</label>
            <input id='password' type="password" onChange={(e) => setUserName({...userInfo, password: e.target.value})}/>
            <br/><br/>
            <button>signup</button>
        </form>
    </>
  )
}
