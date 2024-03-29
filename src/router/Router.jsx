import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ProductDetailsPage from '../pages/ProductDetailsPage'
import CartPage from '../pages/CartPage'

function Router() {
  return (
    <>
     <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/product/:id' element={<ProductDetailsPage/>}></Route>
    <Route path='/cart' element={<CartPage/>}></Route>
</Routes>
    
    </>
   
  )
}

export default Router