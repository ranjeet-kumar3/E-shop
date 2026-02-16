import React, { useContext, useState } from 'react'
import { NavLink ,Link, useSearchParams } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { GiShoppingCart } from "react-icons/gi";
import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { ShopContext } from '../context/ShopContext';







function Navbar() {
  const [visible, setVisible]  = useState(false)
  const {setShowSearch, getCartCount} = useContext(ShopContext)
  return (
    <div className='   flex  items-center justify-between py-5 font-medium  bg-pink-700   fixed top-0 right-0 left-0 w-full z-50 shadow-sm px-4 sm:px-[5vw]'>
      {/* fixed top-0 right-0 left-0 w-full z-50 shadow-sm px-4 sm:px-[5vw] */}
      <Link to='/'><h3 className='text-3xl text-white font-bold '>E-SHOP</h3></Link>
      <ul className='hidden sm:flex gap-8 text-sm text-gray-700 '>
        <NavLink to='/' className={({isActive}) => `flex flex-col items-center gap-2 text-white ${isActive ? 'font-bold' : ''}`}>{({isActive}) => (
          <>
          <p>HOME</p>
          <hr className={`w-2/4 border-none  h-[1.2px] bg-white  ${isActive ? 'block' : 'hidden'}`}/>
          
          </>


        )}
          
        </NavLink>
        <NavLink to='/collection' className={({isActive}) => `flex flex-col items-center gap-2 text-white ${isActive ? 'font-bold' : ''}`}>

        {({isActive}) => (
          <>
          <p>COLLECTION</p>
          <hr className={`w-2/4 border-none   h-[1.5px] bg-white  ${isActive ? 'block' : 'hidden'}`}/>
          </>

        )}
                
        </NavLink>
        <NavLink to='/about' className={({isActive}) => `flex flex-col items-center gap-2 text-white ${isActive ? 'font-bold' : ''}`}>
        {({isActive}) => (
          <>
          <p>ABOUT</p>
          <hr className={`w-2/4 border-none  h-[1.5px] bg-white  ${isActive ? 'block' : 'hidden'}`}/>
          </>

        )}

        </NavLink>
        <NavLink to='/contact' className={({isActive}) => `flex flex-col items-center gap-2 text-white ${isActive ? 'font-bold' : ''}`}>
        {({isActive}) => (
          <>
          <p>CONTACT</p>
          <hr className={`w-2/4 border-none  h-[1.5px] bg-white ${isActive ? 'block' : 'hidden'}`}/>
          </>
        )}

        </NavLink>
        {/* <NavLink to='/contact' className={({isActive}) => `flex flex-col items-center gap-2 text-white ${isActive ? 'font-bold' : ''}`}>
        <hr className='w-2/4 border-none  h-[1.2px] bg-gray-700 hidden'/>
        </NavLink> */}


      </ul>

      <div className='flex items-center gap-6'>
        <p onClick={() => setShowSearch(true)} className='text-2xl cursor-pointer hover:text-black text-white '><CiSearch/></p>

        <div className='group relative'>
          <NavLink  to='/login' ><p className='text-2xl cursor-pointer text-white '><CgProfile/></p></NavLink>
           
           <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'> Logout</p>

            </div>
           </div>
        </div>
        <Link to='/Cart' className='relative'>
        <p className='text-2xl text-white'><GiShoppingCart/></p>
        <p className='absolute bottom-[13px] text-center right-[1px] bg-black text-white aspect-square leading-4 rounded-full w-4 text-[10px] '>{getCartCount()}</p>
        </Link>
        <p  onClick={()=> setVisible(true)}><RiMenu3Fill className='cursor-pointer sm:hidden'/></p>
      </div>

      {/* Sidebar menu for small size  */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden h-200 bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600
          '>
            <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3'>
              <p className='h-4 ml-3 mt-2  text-2xl font-bold hover:text-black'><MdClose className='hover:rotate-90 transition duration-75'/></p>
            </div>
            <NavLink onClick={()=> setVisible(false)} to='/' className='py-2 pl-6 border' > HOME</NavLink>
            <NavLink onClick={()=> setVisible(false)} to='/collection' className='py-2 pl-6 border' > COLLECTION</NavLink>
            <NavLink onClick={()=> setVisible(false)} to='/about' className='py-2 pl-6 border' > ABOUT</NavLink>
            <NavLink onClick={()=> setVisible(false)} to='/contact' className='py-2 pl-6 border' > CONTACT</NavLink>

        </div>

      </div>
    </div>
  )
}

export default Navbar



// import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
// import { MapPin } from 'lucide-react'
// import React, { useState } from 'react'
// import { CgClose } from 'react-icons/cg'
// import { FaCaretDown } from 'react-icons/fa'
// import { IoCartOutline } from 'react-icons/io5'
// import { Link, NavLink } from 'react-router-dom'
// import { useCart } from '../context/CartContext'
// import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
// import ResponsiveMenu from './ResponsiveMenu'

// const Navbar = ({location, getLocation, openDropdown, setOpenDropdown}) => {

//     const {cartItem} = useCart()
//     const [openNav, setOpenNav] = useState(false)
    
//     const toggleDropdown = ()=>{
//         setOpenDropdown(!openDropdown)
//     }
//     return (
//         <div className='bg-white py-3 shadow-2xl px-4 md:px-0'>
//             <div className='max-w-6xl mx-auto flex justify-between items-center'>
//                 {/* logo section */}
//                 <div className='flex gap-7 items-center'>
//                     <Link to={'/'}><h1 className='font-bold text-3xl'><span className='text-red-500 font-serif'>Z</span>aptro</h1></Link>
//                     <div className='md:flex gap-1 cursor-pointer text-gray-700 items-center hidden'>
//                         <MapPin className='text-red-500' />
//                         <span className='font-semibold '>{location ? <div className='-space-y-2'>
//                             <p>{location.county}</p>
//                             <p>{location.state}</p>
//                         </div> : "Add Address"}</span>
//                         <FaCaretDown onClick={toggleDropdown}/>
//                     </div>
//                     {
//                         openDropdown ? <div className='w-[250px] h-max shadow-2xl z-50 bg-white fixed top-16 left-60 border-2 p-5 border-gray-100 rounded-md'>
//                          <h1 className='font-semibold mb-4 text-xl flex justify-between'>Change Location <span onClick={toggleDropdown}><CgClose/></span></h1>
//                          <button onClick={getLocation} className='bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-red-400'>Detect my location</button>
//                         </div> : null
//                     }
//                 </div>
//                 {/* menu section */}
//                 <nav className='flex gap-7 items-center'>
//                     <ul className='md:flex gap-7 items-center text-xl font-semibold hidden'>
//                         <NavLink to={'/'} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`}><li>Home</li></NavLink>
//                         <NavLink to={"/products"} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`}><li>Products</li></NavLink>
//                         <NavLink to={"/about"} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`}><li>About</li></NavLink>
//                         <NavLink to={"/contact"} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`}><li>Contact</li></NavLink>
//                     </ul>
//                     <Link to={'/cart'} className='relative'>
//                         <IoCartOutline className='h-7 w-7' />
//                         <span className='bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white'>{cartItem.length}</span>
//                     </Link>
//                     <div className='hidden md:block'>
//                         <SignedOut>
//                             <SignInButton className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer"/>
//                         </SignedOut>
//                         <SignedIn>
//                             <UserButton />
//                         </SignedIn>
//                     </div>
//                     {
//                         openNav ? <HiMenuAlt3 onClick={()=>setOpenNav(false)} className='h-7 w-7 md:hidden'/>:<HiMenuAlt1 
//                         onClick={()=>setOpenNav(true)}
//                         className='h-7 w-7 md:hidden'/>
//                     }
//                 </nav>
//             </div>
//             <ResponsiveMenu openNav={openNav} setOpenNav={setOpenNav}/>
//         </div>
//     )
// }

// export default Navbar