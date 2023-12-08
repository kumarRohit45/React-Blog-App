import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';
import Header from '../components/Header'
import Blog from '../components/Blog'

const TagPage = () => {

    const location = useLocation();
    const navigation = useNavigate();
    const tag = location.pathname.split("/").at(-1);
  return (
    <div>
        <Header></Header>

        <div>
            <button onClick={()=>{navigation(-1)}}>
                back
            </button>

            <h2>Blogged on #{tag}</h2>


        </div>

        <Blog></Blog>
        <Pagination></Pagination>
    </div>
  )
}

export default TagPage