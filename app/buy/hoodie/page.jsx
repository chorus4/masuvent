'use client'

import { useCart } from '@/app/hooks/useCart'
import cls from 'classname'
import localFont from 'next/font/local'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import styles from './buy.module.scss'

import { useState } from 'react'
import BlackHoodieBack from '../../img/hoodie/BlackHoodieBack.png'
import BlackHoodieFront from '../../img/hoodie/BlackHoodieFront.png'
import WhiteHoodieBack from '../../img/hoodie/WhiteHoodieBack.png'
import WhiteHoodieFront from '../../img/hoodie/WhiteHoodieFront.png'

const gilroy = localFont({ src: '../../fonts/Gilroy-Medium.woff' })

const images = {
  white: {
    front: WhiteHoodieFront,
    back: WhiteHoodieBack,
  },
  black: {
    front: BlackHoodieFront,
    back: BlackHoodieBack,
  },
}

export default function Hoodie() {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      size: 'BABY',
      color: 'BLACK',
      type: 'hoodie',
    },
  })
  const form = watch()
  const { submit } = useCart()
  const [isPictureHovered, setIsPictureHovered] = useState()

  return (
    <main className={cls(gilroy.className, styles.main)}>
      <SwitchTransition mode='out-in'>
        <CSSTransition
          key={
            (isPictureHovered
              ? (form.color == 'BLACK' ? images.black : images.white).front
              : (form.color == 'BLACK' ? images.black : images.white).back
            ).src
          }
          timeout={400}
          classNames={{
            enterActive: styles.imageEnterActive,
            enterDone: styles.imageEnterDone,
            exitActive: styles.imageExitActive,
            exitDone: styles.imageExitDone,
          }}
        >
          <Image
            src={
              isPictureHovered
                ? (form.color == 'BLACK' ? images.black : images.white).front
                : (form.color == 'BLACK' ? images.black : images.white).back
            }
            className={styles.image}
            onMouseEnter={() => setIsPictureHovered(true)}
            onMouseLeave={() => setIsPictureHovered(false)}
          />
        </CSSTransition>
      </SwitchTransition>

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
          // disabled={getAmount(form) > 5}
        >
          {/* {isBought(form) && <span>Уже добавлено в корзину</span>} */}
          {/* {!isBought(form) && <span>BUY</span>} */}
          BUY
          {/* {getAmount(form) && <>({getAmount(form)})</>} */}
        </button>
      </div>
    </main>
  )
}
