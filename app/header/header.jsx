import styles from './header.module.scss' 
import Image from 'next/image'
import localFont from 'next/font/local'
import cls from 'classname'
import logo from '../img/logo.svg'
import cart from '../img/cart.svg'
import Link from 'next/link'

const gilroy = localFont({ src: '../fonts/Gilroy-Medium.woff' })

export default function Header() {

  return (
    <header className={cls(gilroy.className, styles.header)}>
      <div className={styles.leftSide}>
        <Image className={styles.logo} src={logo} alt={'Logo'} />
        <Link href='' className={cls(styles.link, styles.active)}>Каталог</Link>
        <Link href='' className={styles.link}>Инфо</Link>
        <Link href='' className={styles.link}>Отзывы</Link>
        <Link href='' className={styles.link}>Связь</Link>
      </div>

      <div className={styles.rightSide}>
        <h2>UAH</h2>
        <Image src={cart} alt={'Cart'} />
      </div>
    </header>
  )
}