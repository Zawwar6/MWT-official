import React from 'react';
import { assets } from '../assets/assets/assets';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div 
      className='mt-4 flex flex-col sm:flex-row'
      style={{
        background: 'linear-gradient(to right, #1f1f1f, #3e3e3e)',
        border: '1px solid #5a5a5a',
        borderRadius: '12px',
        overflow: 'hidden'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
    >
      {/* Left Side Text Section */}
      <motion.div 
        className="w-full sm:w-1/2 text-left py-10 sm:py-0 flex flex-col items-center justify-center px-6"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className='text-white'>
          <div className="bSell flex gap-3 items-center">
            <p className='bg-white w-8 md:w-11 h-[2px]' />
            <p className='font-semibold text-base md:text-lg permanent'>OUR BESTSELLERS</p>
          </div>

          <div className="prata-regular Lattext text-3xl my-3 lg:text-6xl prata">
            Latest Arrivals
          </div>

          <div className="flex gap-3 items-center">
            <p className='font-semibold text-base md:text-lg permanent'>SHOP NOW</p>
            <p className='bg-white w-8 md:w-11 h-[2px]' />
          </div>
        </div>
      </motion.div>

      {/* Right Side Image */}
      <motion.img 
        className='w-auto h-[500px] object-cover' 
        src='/1.jpg' 
        alt="hero-img"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
};

export default Hero;
