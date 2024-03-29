import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import { addToCart } from '../../context/action'

function ProductCard({product}) {
    const{dispatchCart}=useContext(CartContext)
    const navigate=useNavigate()
    const handleClick=(()=>{
      navigate(`/product/${product.id}`)
    })
    const AddToCart=(()=>{
         dispatchCart(addToCart(product))
    })
  return (
    <div  className='p-10 shadow-2xl shadow-black gap-5 hover:scale-110 hover:duration-200 rounded-md pt-10 relative top-20'>
         
         <img src={product.images[0]} className='h-52 w-64 cursor-pointer'  alt="image is not found"
         onClick={handleClick} />
        <div>
        <h1 className='font-bold mt-2'>{product?.title}</h1>
           <h1 className='text-sm text-red-500 mt-2 font-bold'>{product?.brand}</h1>
           <h1 className='font-bold'>${product?.price}</h1>

           <div className='flex justify-between'>
           <button className='bg-orange-500 text-white px-4 py-2 mt-3 hover:bg-white hover:text-orange-600 rounded-md'
            onClick={AddToCart}
           
           >Add to cart</button>
           <i className="fa-solid fa-heart text-red-600 mt-7"></i>
           </div>
        </div>
    </div>
  )
}

export default ProductCard