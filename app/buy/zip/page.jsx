// 'use client'

// import { useCart } from '@/app/hooks/useCart'
// import cls from 'classname'
// import localFont from 'next/font/local'
// import Image from 'next/image'
// import { useForm } from 'react-hook-form'
// import { CSSTransition, SwitchTransition } from 'react-transition-group'
// import styles from './buy.module.scss'

// import { useState } from 'react'

// const gilroy = localFont({ src: '../../fonts/Gilroy-Medium.woff' })

// export default function Hoodie() {
//   const { register, handleSubmit, watch } = useForm({
//     defaultValues: {
//       size: 'BABY',
//       color: 'BLACK',
//       type: 'zip',
//     },
//   })
//   const form = watch()
//   const { submit } = useCart()
//   const [isPictureHovered, setIsPictureHovered] = useState()

//   return (
//     <main className={cls(gilroy.className, styles.main)}>
//       <SwitchTransition mode='out-in'>
//         <CSSTransition
//           key={(isPictureHovered ? images.black.back : images.black.front).src}
//           timeout={400}
//           classNames={{
//             enterActive: styles.imageEnterActive,
//             enterDone: styles.imageEnterDone,
//             exitActive: styles.imageExitActive,
//             exitDone: styles.imageExitDone,
//           }}
//         >
//           <Image
//             src={isPictureHovered ? images.black.back : images.black.front}
//             className={styles.image}
//             onMouseEnter={() => setIsPictureHovered(true)}
//             onMouseLeave={() => setIsPictureHovered(false)}
//           />
//         </CSSTransition>
//       </SwitchTransition>

//       <div className={styles.rightSection}>
//         <h2>
//           Hoodie
//           <br /> "pathetic bastard"
//         </h2>
//         <p>
//           <span>Material: японский</span>
//           <span>плюш, оверсайз крой,</span>
//           <span>все принты выполнены</span>
//           <span>качественной вышивкой</span>
//         </p>
//         <div className={styles.size}>
//           <span>SIZE</span>

//           <input
//             type='radio'
//             name='size'
//             id='baby'
//             value={'BABY'}
//             {...register('size')}
//           />
//           <label htmlFor='baby'>BABY</label>

//           <input
//             type='radio'
//             name='size'
//             id='xxl'
//             value={'BIG'}
//             {...register('size')}
//           />
//           <label htmlFor='xxl'>BIG</label>
//         </div>
//         {/* <div className={styles.color}>
//           <span>COLOUR</span>

//           <input
//             type='radio'
//             name='color'
//             id='black'
//             value={'BLACK'}
//             {...register('color')}
//           />
//           <label htmlFor='black'>BLACK</label>

//           <input
//             type='radio'
//             name='color'
//             id='white'
//             value={'WHITE'}
//             {...register('color')}
//           />
//           <label htmlFor='white'>WHITE</label>
//         </div> */}
//         <button
//           className={styles.button}
//           onClick={handleSubmit(submit)}
//           // disabled={getAmount(form) > 5}
//         >
//           {/* {isBought(form) && <span>Уже добавлено в корзину</span>} */}
//           {/* {!isBought(form) && <span>BUY</span>} */}
//           BUY
//           {/* {getAmount(form) && <>({getAmount(form)})</>} */}
//         </button>
//       </div>
//     </main>
//   )
// }

'use client'

import { useCart } from '@/app/hooks/useCart'
import cls from 'classname'
import localFont from 'next/font/local'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import styles from './buy.module.scss'

import { useEffect, useState } from 'react'
import { isBrowser, isMobile } from 'react-device-detect'
import ZipBack from '../../img/zip/Back.png'
import ZipFront from '../../img/zip/Front.png'
import MainZip from '../../img/zip/MainZip.png'

const gilroy = localFont({ src: '../../fonts/Gilroy-Medium.woff' })

const images = {
  black: {
    front: ZipFront,
    back: ZipBack,
    main: MainZip,
  },
}
export default function Hoodie() {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      size: 'BABY',
      color: 'BLACK',
      type: 'zip',
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
              {isMobile && (
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
                            ).back
                          : (form.color == 'BLACK'
                              ? images.black
                              : images.white
                            ).front
                      }
                      className={styles.image}
                      alt={'Zip'}
                    />
                  </CSSTransition>
                </SwitchTransition>
              )}
              {isBrowser && (
                // <div className={styles.imagesContainer}>
                <Image
                  src={MainZip}
                  className={cls(styles.image)}
                  alt={'Zip'}
                />
                //   {/* <Image
                //     src={
                //       (form.color == 'BLACK' ? images.black : images.white).back
                //     }
                //     className={styles.image}
                //   /> */}
                // {/* // </div> */}
              )}
            </>
          </CSSTransition>
        </SwitchTransition>
      </div>

      <div className={styles.rightSection}>
        <h2>
          Zip
          <br /> "promised weaknesses"
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
