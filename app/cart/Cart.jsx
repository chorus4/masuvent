import { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import styles from './Cart.module.scss'

export default function Cart() {
  const [isActive, setIsActive] = useState(false)

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
      <div className={styles.modal}>MODAL</div>
    </CSSTransition>
  )
}
