import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import { motion } from 'framer-motion';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setfilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setsubCategory] = useState([]);
  const [sortType, setsortType] = useState('relevant');

  const toogleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setCategory(prev => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setsubCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setsubCategory(prev => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setfilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let filterProductCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setfilterProducts(filterProductCopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setfilterProducts(filterProductCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    setfilterProducts(products);
  }, []);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      {/* Filter Side */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>

        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {['Men', 'Women', 'Kids'].map(cat => (
              <label className='flex gap-2' key={cat}>
                <input className='w-3' type="checkbox" value={cat} onChange={toogleCategory} />
                {cat}
              </label>
            ))}
          </div>
        </div>

        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {['Topwear', 'Bottomwear', 'Winterwear'].map(type => (
              <label className='flex gap-2' key={type}>
                <input className='w-3' type="checkbox" value={type} onChange={toggleSubCategory} />
                {type}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Products */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          <select onChange={(e) => setsortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2 mb-3 cursor-pointer'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Product Cards */}
        <motion.div
          layout
          className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'
        >
          {filterProducts.map((item, index) => {
            const directions = [
              { x: -50, y: 0 },  // Left
              { x: 50, y: 0 },   // Right
              { x: 0, y: -50 },  // Top
              { x: 0, y: 50 },   // Bottom
            ];
            const entry = directions[index % directions.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, ...entry, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                whileHover={{ scale: 1.03 }}
              >
                <ProductItem
                  name={item.name}
                  id={item._id}
                  price={item.price}
                  image={item.image}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Collection;
