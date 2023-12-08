import React, { createContext, useState } from 'react'

import { baseUrl } from '../baseUrl'
import { useNavigate } from 'react-router-dom';
 
export const AppContext = createContext();

 export  function AppContextProvider({children}) {
     const [post,setPost] = useState([]);
     const [loading,setLoading] =useState(false);
     const [page,setPage] = useState(1);
     const [totalPage,setTotalPages] = useState(null);
     const navigate = useNavigate();

     
     
     
     
     async function fetchBlogPost(page = 1,tag = null , category){

        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        if(tag){
           url += `&tag=${tag}`;

        }

        if(category){
           url+= `&category=${category}`;
        }
         
         try{
          


             const response = await fetch(url);
             const data = await response.json();
             
             setPost(data.posts);
             setPage(data.page)
             setTotalPages(data.totalPages);
             console.log(data);
            }
            catch(error){
                console.log('no post found');
                setPost([]);
                setPage(1)
                setTotalPages(null);
            }
            setLoading(false);
        } 
    
        
        function pageHandler(page){
            setPage(page);
          navigate({search:`page=${page}`});
        }
        
        
        
        const value = {
            post,
            setPost,
            loading,
            setLoading,
            page,
            setPage,
            totalPage,
            setTotalPages,
            fetchBlogPost,
            pageHandler
    
}

         return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppContext