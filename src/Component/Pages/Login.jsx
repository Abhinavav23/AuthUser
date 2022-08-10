import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../../AuthContext'

export const Login = () => {
    const loggedInuser = useContext(UserContext)
    const navigate = useNavigate()
    const [usernotfound, setUserNotFound] = useState(false)
    const [passwordNotMatch, setpasswordNotMatch] = useState(false)
    const location = useLocation()
    const [userInfo, setUserName] = useState({
        username:'',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const userList = JSON.parse(localStorage.getItem('users'));
        const userfromStorage = userList.find((user) => {
            return user.username === userInfo.username
        })
        // let path;
        // if(location.state.previousPath){
        //     path = location.state.previousPath
        // } else{
        //     path = '/'
        // }
        if(userfromStorage){
            if(userfromStorage.password === userInfo.password){
                loggedInuser.setUser(userInfo)
                navigate(location.state?.previousPath || '/')
                // navigate(path)
            } else{
                setpasswordNotMatch(true)
            }
            
        } else{
            setUserNotFound(true)
        }
    }

  return (
    <>
        <h2>LogIn</h2>
        <form onSubmit={handleSubmit}>
            <br/>
            <label htmlFor="username">UserName</label>
            <input id='username' type="text" onChange={(e) => setUserName({...userInfo, username: e.target.value})}/>
            <br/>
            <br/>
            <label htmlFor="password">Password</label>
            <input id='password' type="text" onChange={(e) => setUserName({...userInfo, password: e.target.value})}/>
            <br/><br/>
            <button>login</button>
        </form>
       {usernotfound &&  <>
        <h3>You are not an existing user. please signup first</h3>
        <button onClick={() => navigate('/signup')}>Signup</button>
       </>}
       {passwordNotMatch &&  <>
        <h3>Your password is incorrect, please try again</h3>
       </>}
    </>
  )
}
