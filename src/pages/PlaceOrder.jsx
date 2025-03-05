import React, { useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets/assets'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
  const [method,setMethod] = useState('cod');
  const navigate = useNavigate();

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t '>

      {/*Left side */}
        <div className='flex flex-col gap-4 w-full sm:max-w-[480px] '>
            <div className='text-xl sm:text-2xl my-3'>
              <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
                </div>
                <div className='flex gap-3'>
                <input  required name='firstName'  className='border border-gray-300 py-1.5 px-3.5 w-full rounded' type="text" placeholder='First Name' />
                <input  required name='lastName'  className='border border-gray-300 py-1.5 px-3.5 w-full rounded' type="text" placeholder='Last Name' />
                </div>
                <input required name='email' className='border border-gray-300 py-1.5 px-3.5 w-full rounded' type="email" placeholder='Email address' />
                <input required name='street'  className='border border-gray-300 py-1.5 px-3.5 w-full rounded' type="text" placeholder='Street' />
                <div className='flex gap-3'>
            <input  required name='city' className='border border-gray-300 py-1.5 px-3.5 w-full rounded' type="text" placeholder='City' />
            <input  required name='state'  className='border border-gray-300 py-1.5 px-3.5 w-full rounded' type="text" placeholder='State' />
          </div>
          <div className='flex gap-3'>
            <input required name='zipCode'  className='border border-gray-300 py-1.5 px-3.5 w-full rounded' type="number" placeholder='ZipCode' />
            <input required name='country'  className='border border-gray-300 py-1.5 px-3.5 w-full rounded' type="text" placeholder='Country' />
          </div>
          <input required name='phone' className='border border-gray-300 py-1.5 px-3.5 w-full rounded' type="number" placeholder='Phone' />
        </div>
        
        {/*Right Side Working */}

        <div className='mt-8'>
          <div className='mt-8 min-w-80'>
                   <CartTotal/>
          </div>
          <div className='mt-12'>
           <Title text1={'PAYMENT'} text2={'METHOD'}/>
           <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className= {`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-600':''}`}></p>
                <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
            </div>
            <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className= {`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-600':''}`}></p>
                <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
            </div>
            <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className= {`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-600':''}`}></p>
                <p className='text-gray-500 text-sm font-medium'>CASH ON DELIVERY</p>
            </div>
            </div>
            <div className='w-full text-end mt-8'>
            <button onClick={()=>navigate('/order')} className='bg-black text-white text-md my-2 px-16 py-3 cursor-pointer'>PLACE ORDER</button>
            </div>
          </div>
        </div>

    </div>
    
  )
}

export default PlaceOrder
