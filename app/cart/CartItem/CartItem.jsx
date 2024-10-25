import { useCart } from '@/app/hooks/useCart'
import Image from 'next/image'
import cross from '../../img/cross.svg'
import hoodieImg from '../../img/mainhoodie.png'
import whiteHoodie from '../../img/whiteHoodie.png'
import styles from './CartItem.module.scss'

const types = {
  hoodie: {
    name: 'Hoodie "pathetic bastard"',
    price: 2000,
    images: {
      BLACK: hoodieImg,
      WHITE: whiteHoodie,
    },
  },
}

const CartItem = ({ item }) => {
  const { increase, decrease, deleteItem } = useCart()

  return (
    <div className={styles.container}>
      <Image
        src={types[item.type].images[item.color]}
        className={styles.image}
      />
      <div className={styles.row}>
        <span>{types[item.type].name}</span>
        <span className={styles.count}>
          <button onClick={() => decrease(item)} className={styles.button}>
            -
          </button>
          <span>{item.count}</span>
          <button onClick={() => increase(item)} className={styles.button}>
            +
          </button>
        </span>
      </div>
      <Image
        src={cross}
        className={styles.cross}
        onClick={() => deleteItem(item)}
      />
    </div>
  )
}

export default CartItem
