import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets/assets';
import CartTotal from '../components/CartTotal';
import { Navigate, useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate()
  const {products,currency, cartItems , updateQuantity} = useContext(ShopContext);
  const [cardData, setCardData] = useState([]);

  useEffect(() => {

      const tempData = [];
      for(const items in cartItems){
        for(const item in cartItems[items]){
          if (cartItems[items][item] > 0) {
             tempData.push({
              _id: items,
              size:item,
              quantity:cartItems[items][item]
             })
          }
        }
      }
      setCardData(tempData);
      
  }, [cartItems])
  return (
    <div className='border-t pt-14'>
         <div className='text-2xl mb-3'>
           <Title text1={'YOUR'} text2={'CART'}/>
         </div>
         <div>
         {
  cardData.map((item, index) => {
    const productData = products.find((product) => product._id === item._id);
    return (
      <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[1fr_3fr_1fr] items-center gap-6'>
      {/* Left Side: Image */}
      <div className='flex justify-center'>
        <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
      </div>
    
      {/* Middle Content: Product Name, Price & Size */}
      <div className='flex flex-col gap-2'>
        {/* Product Name */}
        <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
    
        {/* Price & Size in Same Row */}
        <div className='flex items-center gap-4'>
          <p className='text-sm sm:text-lg font-medium text-gray-600'>{currency}{productData.price}</p>
          <p className='px-3 py-1 border bg-slate-50 w-fit text-center text-xs sm:text-sm'>{item.size}</p>
        </div>
      </div>
    
      {/* Input Field & Delete Icon */}
      <div className='flex items-center justify-center gap-4'>
        <input onChange={(e)=>e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id,item.size,Number(e.target.value))} className='border px-2 py-1 w-16 text-center' type="number" min={1} defaultValue={item.quantity} />
        <img className='w-5 cursor-pointer hover:opacity-80 transition' src={assets.bin_icon} alt="Delete" onClick={() => updateQuantity(item._id,item.size,0)} />
      </div>
    </div>
    
    );
  })
}
         </div>
         <div className='flex justify-end my-20'>
             <div className='w-full sm:w-[450px]'>
                  <CartTotal/>
                  <div className='w-full text-end'>
                        <button onClick={()=>navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3 cursor-pointer'>PROCEED TO CHECK OUT</button>
                  </div>
             </div>
         </div>
    </div>
  )
}

export default Cart