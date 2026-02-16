import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useLocation } from 'react-router-dom';



function SearchBar() {
    const {search , setSearch , showSearch , setShowSearch} = useContext(ShopContext)
    const [visible, setVisible] = useState(false)

    const location = useLocation();

    useEffect(()=> {
        if(location.pathname.includes('collection') ) {
            setVisible(true);

        }else{
            setVisible(false)
        }
        
        
    },[location])

    // if(!showSearch     ) return null;
     
    
        
  return showSearch && visible ?  (
    <div className='border-t border-b bg-gray-50 text-center flex items-center justify-center  mt-20   '>
        <div onClick={()=> setExpanded(true)} className={`inline-flex items-center just border  border-gray-400 px-10 py-3 my-5 mx- 2 rounded-full w-3/4 sm:w-1/2    `}>
           <input value={search} onChange={(e)=> setSearch(e.target.value)} className='flex-1 w-full outline-none  bg-inherit text-sm transform  transition-transform duration-150 hover:scale-103 ' type='text' placeholder='Search' />
            <p><CiSearch className='text-xl '/></p>

        </div>
        <p  onClick={()=>setShowSearch(false)} className='inline-block w-4 hover:text-black text-gray-900 cursor-pointer text-2xl'><IoMdClose /></p>
      
    </div>
  ) :null
}

export default SearchBar
