'use client'

import { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useCart } from '../hooks/useCart'
import styles from './Cart.module.scss'
import CartItem from './CartItem/CartItem'

export default function Cart() {
  const [isActive, setIsActive] = useState(true)
  const { cart, setCart } = useCart()

  useEffect(() => {
    console.log(cart, 'cartix')
  }, [cart])

  return (
    <CSSTransition
      in={isActive}
      timeout={500}
      classNames={{
        enterActive: styles.modalEnterActive,
        enterDone: styles.modalEnterDone,
        exitActive: styles.modalExitActive,
        exitDone: styles.modalExitDone,
      }}
      unmountOnExit
    >
      <div className={styles.modal}>
        {cart?.map(item => (
          <CartItem item={item} />
        ))}
      </div>
    </CSSTransition>
  )
}
