import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Spinner } from './Spinner';
import BlogDetails from './BlogDetails';
const Blog = () => {

    // consume
    const{loading,post} = useContext(AppContext);

  return (

    <div>

  <div className='posts'>
    {
        loading?(<Spinner></Spinner>):(
            post.length === 0 ? (
                <div>post not available</div>
                )
                :
                (
                    post.map((post)=>(
                    
                        <BlogDetails key = {post.id} post={post}></BlogDetails>
                       
                ))
                )
                )
            }
            </div>

            <div className='underline'> </div>
  </div>
  )
}

export default Blog