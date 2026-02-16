import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
    return (
        <div className=' '>
            <div className=' flex flex-col  bg-gray-100 sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

                <div>
                    {/* <img src={assets.logo} alt='' className='mb-5 w-35' /> */}
                    <h2 className='text-2xl font-bold'>E-SHOP</h2>
                    <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit voluptate at dolore neque, praesentium laboriosam adipisci quam nesciunt numquam commodi. </p>

                </div>

                <div>
                    <p className='text-xl font-medium mb-5'> COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About</li>
                        <li> Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+928299209</li>
                        <li>RK@gmail.com</li>


                    </ul>
                </div>
                
                


            </div>
            <div>
                    <hr/>
                    <p className='py-5 text-sm text-center'>
                        Copyright 2025@ E-Shop 
                    </p>
                </div>
        </div>
            )
}

export default Footer
