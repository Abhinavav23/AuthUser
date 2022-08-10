import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../AuthContext'

export const Header = () => {
    const loggedInUser = useContext(UserContext)
    // const isloggedIn = loggedInUser.user.username ? true : false
  return (
    <>
    <header className='header'>
        <ul className='nav'>
            <li>
                {/* <a href="/">Home</a> */}
                {/* <Link to='/'>Home</Link> */}
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                {/* <a href="/about">About</a> */}
                {/* <Link to='/about'>About</Link> */}
                <NavLink to='/about'>About</NavLink>
            </li>
            <li>
                {/* <a href="/profile">Profile</a> */}
                {/* <Link to='/profile'>profile</Link> */}
                <NavLink to='/profile'>profile</NavLink>
            </li>
            {/*
            <li>
                <NavLink to='/cart'>cart</NavLink>
            </li>
            */}
            
            { loggedInUser.user.username ? <div className='white'>Welcome {loggedInUser.user.username}</div> : <li>
                <NavLink to='/login'>Login</NavLink>
            </li>}
        </ul>
    </header>
    </>
  )
}
