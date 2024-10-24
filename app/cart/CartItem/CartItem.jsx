import { useCart } from '@/app/hooks/useCart'
import styles from './CartItem.module.scss'

const CartItem = ({ item }) => {
  const { increase, decrease } = useCart()

  return (
    <div className={styles.container}>
      {/* <Image /> */}
      <div>
        <span>{item.type}</span>
        <span>
          <button onClick={() => decrease(item)}>-</button>
          <span>{item.count}</span>
          <button onClick={() => increase(item)}>+</button>
        </span>
      </div>
    </div>
  )
}

export default CartItem
