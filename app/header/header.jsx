'use client'

import cls from 'classname'
import localFont from 'next/font/local'
import Image from 'next/image'
import { useState } from 'react'
import leftWave from '../img/left-wave.svg'
import logo from '../img/logo.svg'
import rightWave from '../img/right-wave.svg'
import styles from './header.module.scss'
import { useRouter } from 'next/navigation'

const gilroy = localFont({ src: '../fonts/Gilroy-Medium.woff' })

export default function Header() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <header className={cls(gilroy.className, styles.header)}>
      <div className={styles.head}>
        <div className={styles.leftSide}>
          <a href={'/'}>
            <Image className={styles.logo} src={logo} alt={'Logo'} />
          </a>
          <a href='/' className={cls(styles.link, styles.active)}>
            Каталог
          </a>
          <a href='/info' className={cls(styles.active, styles.link)}>
            Инфо
          </a>
          <a href='/feedback' className={cls(styles.active, styles.link)}>
            Отзывы
          </a>
          <a href='/social' className={cls(styles.active, styles.link)}>
            Связь
          </a>
        </div>

        <div className={styles.rightSide}>
          <h2>UAH</h2>
          {!isHovered && (
            <span
              onMouseOver={() => setIsHovered(true)}
              onMouseOut={() => setIsHovered(false)}
              className={styles.cart}
            >
              <Cart />
            </span>
          )}
          {isHovered && (
            <span
              onMouseOver={() => setIsHovered(true)}
              onMouseOut={() => setIsHovered(false)}
              className={styles.cart}
            >
              <RedCart />
            </span>
          )}
        </div>
      </div>

      <div className={styles.waves}>
        <Image src={leftWave} draggable={false} />
        <Image src={rightWave} className={styles.second} draggable={false} />
      </div>
    </header>
  )
}


function RedCart() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width='56'
      height='56'
      fill='none'
      viewBox='0 0 56 56'
    >
      <mask
        id='mask0_21_339'
        style={{ maskType: 'alpha' }}
        width='56'
        height='56'
        x='0'
        y='0'
        maskUnits='userSpaceOnUse'
      >
        <path fill='url(#pattern0_21_339)' d='M0 0H56V56H0z'></path>
      </mask>
      <g mask='url(#mask0_21_339)'>
        <path
          fill='#871308'
          d='M-17.818 -16.121H84.849V79.75800000000001H-17.818z'
        ></path>
      </g>
      <defs>
        <pattern
          id='pattern0_21_339'
          width='1'
          height='1'
          patternContentUnits='objectBoundingBox'
        >
          <use transform='scale(.00195)' xlinkHref='#image0_21_339'></use>
        </pattern>
        <image
          id='image0_21_339'
          width='512'
          height='512'
          xlinkHref='data:image/png;base64,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'
        ></image>
      </defs>
    </svg>
  )
}

function Cart() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width='56'
      height='56'
      fill='none'
      viewBox='0 0 56 56'
    >
      <mask
        id='mask0_20_218'
        style={{ maskType: 'alpha' }}
        width='56'
        height='56'
        x='0'
        y='0'
        maskUnits='userSpaceOnUse'
      >
        <path fill='url(#pattern0_20_218)' d='M0 0H56V56H0z'></path>
      </mask>
      <g mask='url(#mask0_20_218)'>
        <path
          fill='#fff'
          d='M-17.818 -16.121H84.849V79.75800000000001H-17.818z'
        ></path>
      </g>
      <defs>
        <pattern
          id='pattern0_20_218'
          width='1'
          height='1'
          patternContentUnits='objectBoundingBox'
        >
          <use transform='scale(.00195)' xlinkHref='#image0_20_218'></use>
        </pattern>
        <image
          id='image0_20_218'
          width='512'
          height='512'
          xlinkHref='data:image/png;base64,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'
        ></image>
      </defs>
    </svg>
  )
}