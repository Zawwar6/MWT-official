import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets/assets';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div>
      {/* Page Title */}
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      {/* Contact Section */}
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>

        {/* Image */}
        <motion.img
          className='w-full md:max-w-[480px]'
          src={assets.contact_img}
          alt=""
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />

        {/* Contact Details */}
        <motion.div
          className='flex flex-col justify-center items-start gap-6'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>
            54709 Willms Station <br />
            Suite 350, Washington, USA
          </p>
          <p className='text-gray-500'>
            Tel: (+1)-00000000000 <br />
            Email: contact@mwtofficial.com
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;
