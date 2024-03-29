import React, { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { removeFromCart, updateQuantity } from "../../context/action";

function CartItem({ product }) {
  const {dispatchCart}=useContext(CartContext)
  const [quantity,setQuantity]=useState(product.quantity)
  const subtract = () => {
    if (quantity !== 1) {
      setQuantity(quantity - 1)
      dispatchCart(updateQuantity(product.id,quantity-1));
    }
  };

  const DeleteCart=(id)=>{
    dispatchCart(removeFromCart(id))
  }
  return (

    <tr className="border-b">
      <td className="p-4">
        <img
          src={product?.images[0]}
          alt=""
          className="h-[100px] w-[120px] relative left-20"
        />
      </td>
      <td className="relative left-28">
        <h1 className="text-lg font-semibold">{product?.title}</h1>
        <p className="text-gray-500">{product?.brand}</p>
      </td>
      <td className="p-4 text-right relative right-14">${product?.price}</td>
      <td className="p-4 relative left-[70px]">
        {quantity}
        <button
          className="border p-1 relative right-10"
          onClick={() => {
            setQuantity(quantity + 1);
            dispatchCart(updateQuantity(product.id,quantity+1))
          }}
        >
          +
        </button>
        <button className="border p-1 relative right-2" onClick={subtract}>
          -
        </button>

        <i className="fa-solid fa-xmark relative left-10"  onClick={()=>DeleteCart(product.id)}></i>
      </td>
    </tr>
    
  );
}

export default CartItem;
