import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import { motion } from 'framer-motion';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  const getAnimation = (index) => {
    const directions = ['x', '-x', 'y', '-y'];
    const direction = directions[index % directions.length];
    const distance = 100;

    switch (direction) {
      case 'x':
        return { hidden: { opacity: 0, x: distance }, visible: { opacity: 1, x: 0 } };
      case '-x':
        return { hidden: { opacity: 0, x: -distance }, visible: { opacity: 1, x: 0 } };
      case 'y':
        return { hidden: { opacity: 0, y: distance }, visible: { opacity: 1, y: 0 } };
      case '-y':
        return { hidden: { opacity: 0, y: -distance }, visible: { opacity: 1, y: 0 } };
      default:
        return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
    }
  };

  return (
    <div className='my-10 px-4'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          MWT Official Collection – Where style meets innovation, redefining fashion with exclusive designs that make a statement.
        </p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          latestProducts.map((item, index) => {
            const animation = getAnimation(index);
            return (
              <motion.div
                key={index}
                variants={animation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <ProductItem
                  id={item._id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              </motion.div>
            );
          })
        }
      </div>
    </div>
  );
};

export default LatestCollection;
