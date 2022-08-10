import React, { useContext } from 'react'
import {  Outlet, useNavigate } from 'react-router-dom'
import { UserContext } from '../../../AuthContext'

export const Profile = () => {
  const loggedInUser = useContext(UserContext)
  const navigate = useNavigate();
  const logout = () => {
    loggedInUser.setUser({})
    navigate('/')
  }
  return (
    <>
    <h2>Profile Page</h2>
    <div>Name: {loggedInUser.user.username}</div>
    <button onClick={() => navigate('/')}>Go to home</button>
    <br/>
    <button onClick={logout}>Logout</button>
    <br/>
    <br/>
    <Outlet/>
    </>
  )
}
