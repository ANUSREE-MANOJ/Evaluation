import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Router from './router/Router'
import { CartDataProvider } from './context/CartContext'

function App() {
  return (
    <div>
      <CartDataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Router/>}></Route>
        </Routes>
      </BrowserRouter>

      </CartDataProvider>
    

    </div>
  )
}

export default App