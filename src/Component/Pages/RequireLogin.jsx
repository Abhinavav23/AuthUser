import React, { useContext } from 'react'
import { Navigate, useLocation} from 'react-router-dom';
import { UserContext } from '../../AuthContext';

export const RequireLogin = ({children}) => {
  const location = useLocation()
  console.log(location);
const loggedInUser = useContext(UserContext)
  if(!loggedInUser.user.username){
    return <Navigate to='/login' state={{previousPath: location.pathname}}/>
  } else{
    return children
  }
}
