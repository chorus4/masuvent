'use client'

import { useEffect } from 'react'
import CartProvider from './contexts/Cart/CartProvider'

const Layoutt = ({ children }) => {
  useEffect(() => {
    Object.defineProperty(window, 'token', {
      configurable: true,
      set(value) {
        console.log('Setting new token: ', value)
        localStorage.setItem('token', value)
      },
    })
  }, [])

  return <CartProvider>{children}</CartProvider>
}

export default Layoutt
