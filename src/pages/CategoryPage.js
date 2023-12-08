import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header';
import Blog from '../components/Blog';
import Pagination from '../components/Pagination';
import { useLocation } from 'react-router-dom';

const CategoryPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const category =  location.pathname.split("/").at(-1);
  return (
    <div>
        
        <Header></Header>
        <div>
            <button onClick={()=>{navigation(-1)}}> back</button>
            <h2>Blogged on #{category} </h2>
        </div>

        <Blog></Blog>
        <Pagination></Pagination>

    </div>
  )
}

export default CategoryPage