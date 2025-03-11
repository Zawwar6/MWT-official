import React from 'react';
import { assets } from '../assets/assets/assets';
import { motion } from 'framer-motion';

const policyVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: 'easeOut'
    }
  })
};

const OurPolicy = () => {
  const policies = [
    {
      icon: assets.exchange_icon,
      title: 'Easy Exchange Policy',
      desc: 'We offer hassle free exchange policy',
    },
    {
      icon: assets.quality_icon,
      title: '7 Days Return Policy',
      desc: 'We provide 7 days free return policy',
    },
    {
      icon: assets.support_img,
      title: 'Best Customer Support',
      desc: 'We provide 24/7 customer support',
    },
  ];

  return (
    <div className='py-20 px-6 bg-gradient-to-r'>
      <div className='flex flex-col sm:flex-row justify-around gap-12 text-center'>
        {
          policies.map((policy, index) => (
            <motion.div
              key={index}
              className='p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-white'
              custom={index}
              variants={policyVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <img src={policy.icon} className='w-16 m-auto mb-5' alt={policy.title} />
              <p className='font-semibold text-gray-800 mb-1'>{policy.title}</p>
              <p className='text-gray-500 text-sm'>{policy.desc}</p>
            </motion.div>
          ))
        }
      </div>
    </div>
  );
};

export default OurPolicy;
