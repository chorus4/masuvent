import Link from 'next/link'
import styles from './footer.module.scss'
import { Fira_Mono } from 'next/font/google'
import cls from 'classname'

const fira_mono = Fira_Mono({
  subsets: ['latin', 'cyrillic'],
  weight: '700',
})

export default function Footer() {
    return (
      <footer className={cls(fira_mono.className, styles.footer)}>
        <div>
          <h3>ПОПОДРОБНЕЕ</h3>
          <Link className={styles.link} href=''>
            ГЛАВНАЯ
          </Link>
          <Link className={styles.link} href=''>
            КАТАЛОГ
          </Link>
          <Link className={styles.link} href=''>
            О БРЕНДЕ
          </Link>
        </div>
        <div>
          <h3>ОПРОСЫ И ОТВЕТЫ</h3>
          <Link className={styles.link} href=''>
            СПОСОБЫ ОПЛАТЫ
          </Link>
          <Link className={styles.link} href=''>
            ОТСЛЕЖИВАНИЕ
          </Link>
          <Link className={styles.link} href=''>
            ДОСТАВКА
          </Link>
          <Link className={styles.link} href=''>
            ПУБЛИЧНАЯ ОФЕРТА
          </Link>
          <Link className={styles.link} href=''>
            ПОЛИТИКА
          </Link>
          <Link className={styles.link} href=''>
            КОНФИДЕНЦИАЛЬНОСТИ
          </Link>
        </div>
        <div className={styles.info}>
          <h1>MASUVENT</h1>
          <p>
            <span>Все права защищены.</span>
            <span>ЛЮБОЕ КОПИРОВАНИЕ ЗАПРЕЩЕНО</span>
            <span>ИСПОЛЬЗОВАНИЕ МАТЕРИАЛОВ</span>
            <span>САЙТА БЕЗ УКАЗАНИЯ ССЫЛКИ</span>
            <span>НА САЙТ ИЛИ ДРУГИЕ СОЦ.СЕТИ</span>
            <span>ЗАПРЕЩЕНО.</span>
          </p>
        </div>
        <div>
          <h3>КОНТАКТЫ</h3>
          <Link className={styles.link} href=''>
            КОНТАКТЫ
          </Link>
          <Link className={styles.link} href=''>
            МАГАЗИНЫ
          </Link>
          <Link className={styles.link} href=''>
            ОТЗЫВЫ
          </Link>
        </div>
        <div>
          <h3>СВЯЗАТСЯ С НАМИ</h3>
          <Link className={styles.link} href=''>
            ТЕЛЕГРАМ
          </Link>
          <Link
            className={styles.link}
            href='https://www.instagram.com/masuvent.store'
            target='_blank'
          >
            ИНСТАГРАМ
          </Link>
          <Link className={styles.link} href=''>
            ПОЧТА
          </Link>
        </div>
      </footer>
    )
}