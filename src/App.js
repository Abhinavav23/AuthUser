import './App.css';
import { Home } from './Component/Pages/Home';
import { Routes, Route } from 'react-router-dom'
import { About } from './Component/Pages/About';
import { Profile } from './Component/Pages/Profile/Profile';
import { Header } from './Component/Pages/Header';
import { Post } from './Component/Pages/Post';
import { MyAddress } from './Component/Pages/Profile/MyAddress';
import { Login } from './Component/Pages/Login';
import { Signup } from './Component/Pages/Signup';
import { AuthContext } from './AuthContext';
import { RequireLogin } from './Component/Pages/RequireLogin';
import { useEffect } from 'react';
import React from 'react';

function App() {
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify([]))
    return () => {
      localStorage.clear();
    }
  },[])
  
  return (
    <AuthContext>
    <div className='App'>
      <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      
      <Route path='/about' element={<RequireLogin><About/></RequireLogin>}>
        <Route path='me' element={<div>this is me</div>}/>
        <Route path='myblog' element={<div>this is my blog</div>}/>
      </Route>

      <Route path='/profile' element={<RequireLogin><Profile/></RequireLogin>}>
        <Route path='myorder' element={<div>My orders</div>}/>
        <Route path='myaddress' element={<MyAddress/>}/>
        <Route path='mywallet' element={<div>My wallet</div>}/>
      </Route>

      {/* parameters ---> dynamic routing */}
      <Route path='/:postId' element={<Post/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='*' element={<div>Page not found</div>}/>
     </Routes>
    </div>
    </AuthContext>
  );
}

export default App;
