import styles from './header.module.scss' 
import Image from 'next/image'
import localFont from 'next/font/local'
import cls from 'classname'
import logo from '../img/logo.svg'
import cart from '../img/cart.svg'

const gilroy = localFont({ src: '../fonts/Gilroy-Medium.woff' })

export default function Header() {

  return (
    <header className={cls(gilroy.className, styles.header)}>
      <div className={styles.leftSide}>
        <Image className={styles.logo} src={logo} alt={'Logo'} />
        <a href='' className={cls(styles.link, styles.active)}>Каталог</a>
        <a href='' className={styles.link}>Инфо</a>
        <a href='' className={styles.link}>Отзывы</a>
        <a href='' className={styles.link}>Связь</a>
      </div>

      <div className={styles.rightSide}>
        <h2>UAH</h2>
        <Image src={cart} alt={'Cart'} />
      </div>
    </header>
  )
}