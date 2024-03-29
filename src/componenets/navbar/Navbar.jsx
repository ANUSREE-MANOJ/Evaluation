import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import CartContext from '../../context/CartContext'

function Navbar() {
    const {cart} =useContext(CartContext)
    const location=useLocation()
    const navigate=useNavigate()
    const handleClickCart=(()=>{
         navigate("/cart")
    })
    const isCartPage=location.pathname ==='/cart'
  return (
    <div className='bg-black p-4 text-white flex justify-between w-full z-50 top-0 left-0 fixed '>
     <h1 className='text-2xl font-bold hover:scale-110 hover:duration-200 cursor-pointer'
      onClick={()=>navigate("/")}
     >FLIP</h1>
{!isCartPage && (  
                <div>
                    <i className="fa-solid fa-cart-shopping cursor-pointer mr-5" onClick={handleClickCart}></i>
                    <div className='bg-red-600 w-4 h-4 relative left-2 bottom-7 flex justify-center rounded-full'>
                        <p className='text-white text-xs'>
                            {cart?.products?.length}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar