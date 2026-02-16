import React from 'react'
import { assets } from '../assets/assets'
import { RiCustomerServiceFill } from "react-icons/ri";
import { GiCardExchange } from "react-icons/gi";




function OurPolicy() {
  return (
    <div className='flex flex-col sm:flex-row  justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div className=''>
        {/* <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt=''/> */}
        <p className='w-12 text-5xl text-black m-auto mb-5'><GiCardExchange/></p>
        <p>Easy  Exchange Policy</p>
        <p>We offer hassle free exchange policy</p>
      </div>
      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt=''/>
        <p>7 Days Return Policy</p>
        <p>We provide 7 day free return policy</p>
      </div>
      <div>
        {/* <img src={assets.support_icon} className='w-12 m-auto mb-5' alt=''/> */}
        <p className='w-12 text-5xl text-black m-auto mb-5'><RiCustomerServiceFill/></p>
        <p>Best customer support </p>
        <p>We provide 24/7 customer support </p>
      </div>
    </div>
  )
}

export default OurPolicy
