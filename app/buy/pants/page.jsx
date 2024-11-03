'use client'

import { useCart } from '@/app/hooks/useCart'
import cls from 'classname'
import localFont from 'next/font/local'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import styles from './buy.module.scss'

import { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import pants from '../../img/pants/pants.png'

const gilroy = localFont({ src: '../../fonts/Gilroy-Medium.woff' })

// const images = {
//   white: {
//     front: WhiteHoodieFront,
//     back: WhiteHoodieBack,
//   },
//   black: {
//     front: BlackHoodieFront,
//     back: BlackHoodieBack,
//   },
// }

export default function Hoodie() {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      size: 'M',
      color: 'BLACK',
      type: 'pants',
      price: '2700',
    },
  })
  const form = watch()
  const { submit } = useCart()
  const [isPictureHovered, setIsPictureHovered] = useState()

  useEffect(() => {
    setIsPictureHovered(false)
  }, [])

  return (
    <main className={cls(gilroy.className, styles.main)}>
      <div
        // className={styles.imageDiv}
        onClick={() => {
          if (isMobile) setIsPictureHovered(value => !value)
        }}
      >
        <SwitchTransition mode='out-in'>
          <CSSTransition
            key={form.color == 'BLACK'}
            timeout={400}
            classNames={{
              enterActive: styles.imageEnterActive,
              enterDone: styles.imageEnterDone,
              exitActive: styles.imageExitActive,
              exitDone: styles.imageExitDone,
            }}
          >
            <>
              {/* {isMobile && (
                <SwitchTransition mode='out-in'>
                  <CSSTransition
                    key={isPictureHovered}
                    timeout={400}
                    classNames={{
                      enterActive: styles.imageEnterActive,
                      enterDone: styles.imageEnterDone,
                      exitActive: styles.imageExitActive,
                      exitDone: styles.imageExitDone,
                    }}
                    appear
                  >
                    <Image
                      src={
                        isPictureHovered
                          ? (form.color == 'BLACK'
                              ? images.black
                              : images.white
                            ).front
                          : (form.color == 'BLACK'
                              ? images.black
                              : images.white
                            ).back
                      }
                      className={styles.image}
                      alt={'Hoodie'}
                    />
                  </CSSTransition>
                </SwitchTransition>
              )} */}
              {/* <div className={styles.imagesContainer}> */}
              <Image src={pants} className={cls(styles.image)} alt={'Hoodie'} />
              {/* <Image
                //     src={
                //       (form.color == 'BLACK' ? images.black : images.white).back
                //     }
                //     className={styles.image}
                //   /> */}
              {/* // </div> */}
            </>
          </CSSTransition>
        </SwitchTransition>
      </div>

      <div className={styles.rightSection}>
        <h2>
          Pants
          <br /> "fake blood"
        </h2>
        <p className={styles.material}>
          <span>Материал: Хлопок 100%, 360 плотность,</span>
          <span>премиальный футер трехнитка с начесом</span>
          <br />

          {/* <span>Material: японский</span>
          <span>плюш, оверсайз крой,</span>
          <span>все принты выполнены</span>
          <span>качественной вышивкой</span> */}
        </p>

        <p className={styles.descr}>
          <span>Штаны широкие (выход 33см), теплые,</span>
          <span>отлично подойдут на зимний</span>
          <span>сезон, также есть 2 кармана (спереди).</span>
          <span>Штаны выполнены с очень</span>
          <span>качественных и дорогих материалов,</span>
          <span>так как нам важно чтобы ваша зима</span>
          <span>прошла в тепле и с комфортом.</span>
        </p>
        <div className={styles.size}>
          <span>SIZE</span>

          <input
            type='radio'
            name='size'
            id='baby'
            value={'M'}
            {...register('size')}
          />
          <label htmlFor='baby'>M</label>

          <input
            type='radio'
            name='size'
            id='xxl'
            value={'XL'}
            {...register('size')}
          />
          <label htmlFor='xxl'>XL</label>
        </div>
        {/* <div className={styles.color}>
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
        </div> */}
        <h2>{watch('price')} UAH</h2>
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
