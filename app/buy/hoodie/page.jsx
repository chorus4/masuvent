'use client'

import Cart from '@/app/cart/Cart'
import { useCart } from '@/app/hooks/useCart'
import cls from 'classname'
import localFont from 'next/font/local'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import mainHoodie from '../../img/mainhoodie.png'
import styles from './buy.module.scss'

const gilroy = localFont({ src: '../../fonts/Gilroy-Medium.woff' })

export default function Hoodie() {
  const productId = 'HOODIE'
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      size: 'BABY',
      color: 'BLACK',
    },
  })
  const form = watch()
  console.log(form)
  const { cart, setCart, isBought, submit } = useCart()

  return (
    <main className={cls(gilroy.className, styles.main)}>
      <Cart />
      <Image src={mainHoodie} className={styles.image} />

      <div className={styles.rightSection}>
        <h2>
          Hoodie
          <br /> "pathetic bastard"
        </h2>
        <p>
          <span>Material: японский</span>
          <span>плюш, оверсайз крой,</span>
          <span>все принты выполнены</span>
          <span>качественной вышивкой</span>
        </p>
        <div className={styles.size}>
          <span>SIZE</span>

          <input
            type='radio'
            name='size'
            id='baby'
            value={'BABY'}
            {...register('size')}
          />
          <label htmlFor='baby'>BABY</label>

          <input
            type='radio'
            name='size'
            id='xxl'
            value={'BIG'}
            {...register('size')}
          />
          <label htmlFor='xxl'>BIG</label>
        </div>
        <div className={styles.color}>
          <span>COLOUR</span>

          <input
            type='radio'
            name='color'
            id='black'
            value={'BLACK'}
            {...register('color')}
          />
          <label htmlFor='black'>BLACK</label>

          <input
            type='radio'
            name='color'
            id='white'
            value={'WHITE'}
            {...register('color')}
          />
          <label htmlFor='white'>WHITE</label>
        </div>
        <button
          className={styles.button}
          onClick={handleSubmit(submit)}
          disabled={isBought(form)}
        >
          {isBought(form) && <span>Уже добавлено в корзину</span>}

          {!isBought(form) && <span>BUY</span>}
        </button>
      </div>
    </main>
  )
}
