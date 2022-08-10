import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Post = () => {
    const [post, setPost] = useState({})
    const params = useParams();
    console.log(params);
    useEffect(() => {
       try {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data);
            setPost(data)
        })
        .catch((e) => {
            console.log(e.message);
        })
       } catch(e){
        console.log();
       }
    },[params.postId])
  return (
   <> 
    <div>Post : {post.id}</div>
    <div>user Id : {post.userId}</div>
    <div>Title : {post.title}</div>
    <div>body : {post.body}</div>
   </>
  )
}
