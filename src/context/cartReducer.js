import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from "./actionType"
import { initialState } from "./intitalState";



const cartReducer=(cart=initialState,action)=>{
    switch(action.type)
    {
        case ADD_TO_CART:

            const existingProductIndex = cart.products.findIndex(item => item.id === action.payload.id);
      if (existingProductIndex !== -1) {
        


        const updatedProducts = cart.products.map((item,index)=>{
          if(index===existingProductIndex)
          {
            return {
              ...item,
              quantity:item.quantity + 1,
            };
          }
          return item;
        });
        return {
          ...cart,
          products:updatedProducts
        }
        
      } else {
        
        return {
          ...cart,
          products: [...cart.products, { ...action.payload, quantity: 1 }]
        };
      }

        
       
        case REMOVE_FROM_CART:
            return {
                ...cart,products:cart.products.filter((item)=>item.id!==action.payload)
    }

    case CLEAR_CART:
      return {
        ...cart,
        products: [], 
      };
    

    case UPDATE_QUANTITY:
      const { id, quantity } = action.payload;
      const updatedCartProducts = cart.products.map((product) =>
        product.id === id ? { ...product, quantity } : product
      );
      return {
        ...cart,
        products: updatedCartProducts,
      };
}
}
export default cartReducer