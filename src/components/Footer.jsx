import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 text-md '>
            <div>
            <h1 className='font-bold text-blue-950 text-3xl'>MWT OFFICIAL</h1> <br />
            <p className='w-full md:w-2/3 text-gray-600'>
            MWT Official is your go-to destination for premium leather jackets and gloves, crafted with precision and style.
             We bring you the finest quality, blending timeless elegance with modern trends to ensure durability and comfort. 
             Whether you're looking for a bold statement piece or everyday essentials, our collection is designed to elevate your style. 
             Shop with confidence and experience luxury like never before!
            </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                  <li>Home</li>
                  <li>About us</li>
                  <li>Delivery</li>
                  <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                      <li>+1-00000000000</li>
                      <li>contact@mwtofficial.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ mwtofficial.com - All Right Reserved</p>
    </div>
  )
}

export default Footer