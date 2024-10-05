import cls from 'classname'
import localFont from 'next/font/local'
import Image from 'next/image'
import Link from 'next/link'
import cart from '../img/cart.svg'
import leftWave from '../img/left-wave.svg'
import logo from '../img/logo.svg'
import rightWave from '../img/right-wave.svg'
import styles from './header.module.scss'

const gilroy = localFont({ src: '../fonts/Gilroy-Medium.woff' })

export default function Header() {
  return (
    <header className={cls(gilroy.className, styles.header)}>
      <div className={styles.head}>
        <div className={styles.leftSide}>
          <Image className={styles.logo} src={logo} alt={'Logo'} />
          <Link href='' className={cls(styles.link, styles.active)}>
            Каталог
          </Link>
          <Link href='' className={styles.link}>
            Инфо
          </Link>
          <Link href='' className={styles.link}>
            Отзывы
          </Link>
          <Link href='' className={styles.link}>
            Связь
          </Link>
        </div>

        <div className={styles.rightSide}>
          <h2>UAH</h2>
          <Image src={cart} alt={'Cart'} />
        </div>
      </div>

      <div className={styles.waves}>
        <Image src={leftWave} draggable={false} />
        <Image src={rightWave} className={styles.second} draggable={false} />
      </div>
    </header>
  )
}
