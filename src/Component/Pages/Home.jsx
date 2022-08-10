import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { FaBeer, FaCheck, FaWindowClose } from 'react-icons/fa';
import { Loader } from '../Loader/Loader';

export const Home = () => {
  const[posts, setPosts] = useState([])
  const [searchParams, setsearchParams] = useSearchParams();
  const[loading, setLoading] = useState(false);

  console.log(searchParams.get('user'));
  const navigate = useNavigate()
  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setPosts(data)
      setLoading(false);
    })
  }, [])

  return (
    <>
    <h2>Home Page</h2>
    <FaBeer/>
    <button onClick={() => setsearchParams({userId: 1, user:'Abhinav'})} className='filterButton'>userId 1</button>
    <button onClick={() => setsearchParams({userId: 2})} className='filterButton'>userId 2</button>
    <ul>
    {
      loading ? <Loader/> : (<main>
        {posts.map((el) =>{
        return (
          <li key={el.id}>
            <button onClick={() =>navigate(`${el.id}`)}>{el.title}</button>
            <span>{el.completed ? <FaCheck/> : <FaWindowClose/> }</span>
            <br/>
            <br/>
          </li>
        )
      })}
      </main>)
    }
    </ul>
    </>
  )
}