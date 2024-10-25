'use client'

import { useState } from 'react'
import { CartContext } from './cartContext'

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState()
  const [isCartActive, setIsCartActive] = useState(false)

  return (
    <CartContext.Provider
      value={{ cart, setCart, isCartActive, setIsCartActive }}
    >
      <div onClick={() => setIsCartActive(false)}>{children}</div>
    </CartContext.Provider>
  )
}

export default CartProvider
