import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export const Home = () => {
  const[posts, setPosts] = useState([])
  const [searchParams, setsearchParams] = useSearchParams()
  console.log(searchParams.get('user'));
  const navigate = useNavigate()
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      setPosts(data)
    })
  }, [])

  return (
    <>
    <h2>Home Page</h2>
    <button onClick={() => setsearchParams({userId: 1, user:'Abhinav'})} className='filterButton'>userId 1</button>
    <button onClick={() => setsearchParams({userId: 2})} className='filterButton'>userId 2</button>
    <ul>
    {
      posts.map((el) =>{
        return (
          <li key={el.id}>
            <button onClick={() =>navigate(`${el.id}`)}>{el.title}</button>
            <span>{el.completed ? 'done' : 'not done' }</span>
            <br/>
            <br/>
          </li>
        )
      })
    }
    </ul>
    </>
  )
}