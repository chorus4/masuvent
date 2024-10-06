import './thanks.scss'
import styles from './thanks.module.scss'
import localFont from 'next/font/local'
import cls from 'classname'

const gilroy = localFont({ src: '../fonts/Gilroy-Medium.woff' })

export default function Thanks() {
  return (
    <main className={cls(gilroy.className, styles.main)}>
      <h1>Спасибо за покупку!</h1>
      <h2>Ваш заказ был принят в обработку</h2>
      <h3>Скоро с вами свяжется специалист.</h3>
    </main>
  )
}