import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets/assets';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div>
      {/* Title Section */}
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      {/* About Image + Text Section */}
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <motion.img
          className='w-full md:max-w-[450px]'
          src={assets.about_img}
          alt=""
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
        <motion.div
          className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p>Discover timeless style with MWT Official your go-to brand for premium leather jackets and gloves. Crafted with quality, designed for comfort, and made to last. Whether you're riding or styling up, our collection adds boldness to your look.</p>
          <p>Each piece at MWT Official tells a story of craftsmanship and attitude. From rugged leather jackets to sleek gloves, we blend tradition with modern edge. Our products are not just fashion they are a statement. Dare to stand out. Choose quality. Choose confidence. Choose MWT.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At MWT Official, our mission is to redefine style through premium leatherwear that blends durability, elegance, and individuality. We aim to empower every customer with confidence by providing top-quality leather jackets and gloves that reflect boldness, comfort, and timeless fashion. Your style, our craftsmanship built to last.</p>
        </motion.div>
      </div>

      {/* Choose Us Title */}
      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      {/* Why Choose Us Cards */}
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        {[
          {
            title: 'Quality Assurance:',
            desc: 'We meticulously select and vet each product to ensure it meets our stringent quality standards.',
            direction: { x: -50, y: 0 },
          },
          {
            title: 'Convenience:',
            desc: 'With our user-friendly interface and hassle-free ordering process, shopping has never been easier.',
            direction: { x: 0, y: 50 },
          },
          {
            title: 'Exceptional Customer Service:',
            desc: 'Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.',
            direction: { x: 50, y: 0 },
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'
            initial={{ opacity: 0, ...item.direction }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 + index * 0.2, ease: 'easeOut' }}
          >
            <b>{item.title}</b>
            <p className='text-gray-600'>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
