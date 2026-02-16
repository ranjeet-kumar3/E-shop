import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import Product from './Product'
import ProductItem from '../components/ProductItem'
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
// import { IoArrowForwardSharp } from "react-icons/io5";




function Collection() {
  const {products, search, showSearch} = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([]);
  const [ category , setCategory] = useState([]);
  const [ subCategory, setSubCategory] = useState([]);
  const [sortOption, setSortOption] = useState('relavent');
  const [displayCount, setDisplayCount] = useState(16);
  const productsPerPage = 2;
 

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev=> [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

 const applyFilter = () => {
  let  productsCopy =  products.slice();

  if(showSearch && search){
    productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
  }

  if(category.length  > 0) {
    productsCopy = productsCopy.filter(item => category.includes(item.category))
  }

  if(subCategory.length  > 0){
    productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
  }
  
  // apply sorting based on selected option
  switch (sortOption) {
    case 'low-high':
      productsCopy.sort((a, b) => (a.price || 0) - (b.price || 0));
      break;
    case 'high-low':
      productsCopy.sort((a, b) => (b.price || 0) - (a.price || 0));
      break;
    default:
      break;
  }

  setFilterProducts(productsCopy)

 }


// removed unused sortProducts helper; sorting applied inside applyFilter
  // useEffect(()=> {
  //   setFilterProducts(products)
  // },[])
 
  useEffect(() => {
    applyFilter()
  },[category , subCategory , products, sortOption ,search, showSearch])
  return (
    <div className=' flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10  mt-20'>
      <div className='min-w-60  '>  
        <p  className='my-2 text-xl flex items-center cursor-pointer gap-2'>Filter</p>
        {/* Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p  className='mb-3 text-sm font-medium'>Category</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='  flex gap-2'>
              <input type="checkbox" className='w-3' value={'Men'} onChange={toggleCategory}   /> Men
            </p>
            <p className=' flex gap-2'>
              <input type='checkbox' className='w-3' value={'Women'} onChange={toggleCategory}/> Women
            </p>
            <p className=' flex gap-2'>
              <input type='checkbox' className='w-3' value={'Kids'} onChange={toggleCategory}/> Kids
            </p>
          </div>
            
        </div>
        {/* subcategory filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p  className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='  flex gap-2'>
              <input type="checkbox" className='w-3' value={'Topwear'} onChange={toggleSubCategory}/> Topwear
            </p>
            <p className=' flex gap-2'>
              <input type='checkbox' className='w-3' value={'Bottomwear'} onChange={toggleSubCategory}/> Bottomwear
            </p>
            <p className=' flex gap-2'>
              <input type='checkbox' className='w-3' value={'Winterwear'} onChange={toggleSubCategory}/> Winterwear
            </p>

          </div>
            
        </div>

      </div>


      {/* Right side  */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'All'}   text2={'COLLECTION'}  />
          {/* pRODUCT SHORT */}
          <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relavent" >sort by: revelent</option>
            <option value="low-high"> Sort by: low-high</option>
            <option value="high-low"> Sort by: high-low</option>
          </select>

        </div>
        {/* map product */}
        <div className='grid grid-cols-2 md:grid-cols-3   lg:grid-cols-4 gap-6 gap-y-6'>
          
          {
            filterProducts.slice(0, displayCount).map((item, index)=> (
              <ProductItem key={index} name={item.name} price={item.price} id={item._id} image={item.image}/>
            ))

          }
        </div>

        {/* Pagination Buttons */}
        <div className='flex justify-center gap-10 mt-10 mb-10'>
          <button 
            onClick={() => setDisplayCount(prev => Math.max(prev - productsPerPage, productsPerPage))}
            disabled={displayCount === productsPerPage}
            className='px-6 py-2 border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 flex items-center gap-2'
          >
           < IoMdArrowBack className='text-xl'/> Previous
          </button>
          {/* <span className='px-4 py-2 text-gray-600'>
            Showing {Math.min(displayCount, filterProducts.length)} of {filterProducts.length}
          </span> */}
          <div className='flex items-center gap-2'>
            {Array.from({ length: Math.min(4 , Math.ceil(filterProducts.length / productsPerPage)) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setDisplayCount((index + 1) * productsPerPage)}
                className={`px-3 py-2 rounded ${Math.ceil(displayCount / productsPerPage) === index + 1 ? 'bg-gray-800 text-white' : 'border border-gray-300 hover:bg-gray-100'}`}
              >
                {index + 1}
              </button>
            ))}
          </div> 
          <button 
            onClick={() => setDisplayCount(prev => prev + productsPerPage)}
            disabled={displayCount >= filterProducts.length}
            className='px-6 py-2 border border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 flex items-center gap-2'
          >
            Show More <IoMdArrowForward className='text-xl'/>
          </button>
        </div>

      </div>
      
    </div>
  )
}

export default Collection

{/* <div className='flex items-center gap-2'>
            {Array.from({ length: Math.ceil(filterProducts.length / productsPerPage) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setDisplayCount((index + 1) * productsPerPage)}
                className={`px-3 py-2 rounded ${Math.ceil(displayCount / productsPerPage) === index + 1 ? 'bg-gray-800 text-white' : 'border border-gray-300 hover:bg-gray-100'}`}
              >
                {index + 1}
              </button>
            ))}
          </div> */}







