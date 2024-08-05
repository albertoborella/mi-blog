import React from 'react'
import { useParams, Link } from "react-router-dom"

export const Post = () => {
    const param = useParams().id
    const post_id = Number(param)
    console.log(`corresponde al post ${post_id}`)

    

  return (
    <>
    <h2 style={{marginTop:"50px"}}>Corresponde al post {post_id}</h2><br/>
    <Link to="/posteos">Todos los posts</Link>
    </>
  )
}
