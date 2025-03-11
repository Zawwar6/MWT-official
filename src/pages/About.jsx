import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets/assets'

const About = () => {
  return (
    <div>
    <div className='text-2xl text-center pt-8 border-t'>
     <Title text1={'ABOUT'} text2={'US'} />
    </div>
      
      <div className='my-10 flex flex-col md:flex-row gap-16'>
       <img className='w-full md:max-w-[450px] ' src={assets.about_img} alt="" />
         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
         <p>Discover timeless style with MWT Official your go-to brand for premium leather jackets and gloves. Crafted with quality, designed for comfort, and made to last. Whether you're riding or styling up, our collection adds boldness to your look. </p>
         <p>Each piece at MWT Official tells a story of craftsmanship and attitude. From rugged leather jackets to sleek gloves, we blend tradition with modern edge. Our products are not just fashion they are a statement. Dare to stand out. Choose quality. Choose confidence. Choose MWT.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At MWT Official, our mission is to redefine style through premium leatherwear that blends durability, elegance, and individuality. We aim to empower every customer with confidence by providing top-quality leather jackets and gloves that reflect boldness, comfort, and timeless fashion. Your style, our craftsmanship built to last.</p>
         </div>
      </div>
     <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
     </div>
     
     <div className='flex flex-col md:flex-row text-sm mb-20'>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance:</b>
        <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
       </div>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convenience:</b>
        <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
       </div>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exceptional Customer Service:</b>
        <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
       </div>
     </div>

    </div>
  )
}

export default About