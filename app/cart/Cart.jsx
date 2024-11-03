'use client'

import { useContext } from 'react'
import { CSSTransition } from 'react-transition-group'
import { CartContext } from '../contexts/Cart/cartContext'
import { useCart } from '../hooks/useCart'
import styles from './Cart.module.scss'
import CartItem from './CartItem/CartItem'

export default function Cart() {
  const { isCartActive } = useContext(CartContext)
  const { cart } = useCart()

  return (
    <CSSTransition
      in={isCartActive}
      timeout={400}
      classNames={{
        enterActive: styles.modalEnterActive,
        enterDone: styles.modalEnterDone,
        exitActive: styles.modalExitActive,
        exitDone: styles.modalExitDone,
      }}
      unmountOnExit
    >
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        {cart?.length < 1 && <p>Корзина пуста (</p>}
        {cart?.map(item => (
          <CartItem item={item} key={JSON.stringify(item)} />
        ))}

        {cart?.length > 0 && <a href={'/checkout'}>Checkout</a>}
      </div>
    </CSSTransition>
  )
}
