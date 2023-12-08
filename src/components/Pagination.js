import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
 const Pagination = () => {
    const{pageHandler,page,totalPage} = useContext(AppContext);
  return (
    <div className='footer'>
      <div >

        {page > 1 &&
        <button className='btn' onClick={()=>{pageHandler(page-1)}}>Previous</button>
      }

        {
          page < totalPage &&
          <button onClick={()=>pageHandler(page+1)}>Next</button>
        }
        </div>

        <p className='page-info'>page {page} of {totalPage}</p>
    </div>
  )
}

export default Pagination