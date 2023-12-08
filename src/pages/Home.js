import React from 'react'
import Header from '../components/Header'
import Blog from '../components/Blog'
import Pagination from '../components/Pagination'


const Home = () => {
  return (
    <div>
        <Header></Header>
        <Blog></Blog>
        <Pagination></Pagination>
    </div>
  )
}

export default Home