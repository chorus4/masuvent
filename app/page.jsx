import Image from 'next/image';
import mainHoodie from './img/mainhoodie.png'
import { Girassol } from 'next/font/google'
import styles from './page.module.scss'
import localFont from 'next/font/local'
import cls from 'classname'

const girassol = Girassol({
  subsets: ['latin'],
  weight: '400'
})
const gilroy = localFont({ src: './fonts/Gilroy-Medium.woff' })

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <h1 className={cls(girassol.className, styles.header)}>NEW DROP AVAILABLE</h1>
        <Image className={styles.image} src={mainHoodie} />
        <p className={cls(gilroy.className, styles.description)}>Hoodie "pathetic bastard"</p>
        <p className={cls(gilroy.className, styles.price)}>2400 UAH</p>
        <button className={cls(gilroy.className, styles.button)}>More Info</button>
      </div>
    </main>
  )
}
