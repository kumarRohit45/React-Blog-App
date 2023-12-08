
import './App.css';
// import Blog from './components/Blog';
// import { Pagination } from './components/Pagination';
// import Header from './components/Header';
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import Home from './pages/Home';
import TagPage from './pages/TagPage';
import CategoryPage from './pages/CategoryPage';
import BlogPage from './pages/BlogPage';
import { useLocation } from 'react-router-dom';

function App() {

  const {fetchBlogPost} = useContext(AppContext);
  const[searchParams, setSearchParams] = useSearchParams();
  const location  = useLocation();


  useEffect(()=>{
   const page=  searchParams.get('page')?? 1;

   if(location.pathname.includes('tags')){
    const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
    fetchBlogPost(Number(page),tag);
   }

   else if(location.pathname.includes("categories")){
    const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
    fetchBlogPost(Number(page),null,category);

   }

   else{
    fetchBlogPost(Number(page));
   }
  },[location.pathname,location.search])
  return (
   
    <Routes>
      <Route path = '/' element={<Home/>}/>
      <Route path = '/blog/:blogId' element={<BlogPage/>}/>
      <Route path = '/tags/:tag' element={<TagPage/>}/>
      <Route path = '/categories/:category' element={<CategoryPage/>}/>
    </Routes>
  );
}

export default App;
