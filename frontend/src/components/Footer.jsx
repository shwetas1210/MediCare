import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

              {/*--------- left section ------- */}
              <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>This platform is designed to simplify doctor appointment bookings. It does not provide medical advice. Always consult a licensed healthcare professional for medical concerns</p>
              </div>

              {/*-------- centre section -------- */}
              <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>

              {/*--------- right section --------- */}
              <div>
                <p className='text-xl font-medium mb-5'> REACH OUT</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                  <li>+91 532 2405678</li>
                  <li>+91 532 2897547</li>
                  <li>medicare.official@gmail.com</li>
                </ul>
              </div>
      </div>
      {/*--------- copyright text --------- */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center '>Copyright2025@Medicare - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer