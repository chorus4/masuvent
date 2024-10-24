'use client'

import CartProvider from './contexts/Cart/CartProvider'

const Layoutt = ({ children }) => {
  return <CartProvider>{children}</CartProvider>
}

export default Layoutt
