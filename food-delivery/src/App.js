import React, { useState } from 'react'
import Cart from './Components/Cart/Cart'
import Header from './Components/Layout/Header'
import Meals from './Components/Meals/Meals'
import CartProvider from './Store/CartProvider';

export default function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const cartOpenHandler = () => {
    setIsCartVisible(true)
  }

  const cartCloseHandler = () => {
    setIsCartVisible(false)
  }

  return (
    <CartProvider>
      {isCartVisible && <Cart onCartClose={cartCloseHandler} />}
      <Header onCartOpen={cartOpenHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

