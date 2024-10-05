import cls from 'classname'
import { Girassol } from 'next/font/google'
import localFont from 'next/font/local'
import Image from 'next/image'
import br from './img/br.svg'
import mainHoodie from './img/mainhoodie.png'
import styles from './page.module.scss'

const girassol = Girassol({
  subsets: ['latin'],
  weight: '400',
})
const gilroy = localFont({ src: './fonts/Gilroy-Medium.woff' })

export default function Home() {
  return (
    <main>
      <section className={styles.container}>
        <h1 className={cls(girassol.className, styles.header)}>
          NEW DROP AVAILABLE
        </h1>
        <Image className={styles.image} src={mainHoodie} />
        <p className={cls(gilroy.className, styles.description)}>
          Hoodie "pathetic bastard"
        </p>
        <p className={cls(gilroy.className, styles.price)}>2650 UAH</p>
        <button className={cls(gilroy.className, styles.button)}>
          More Info
        </button>
      </section>

      <Image src={br} className={styles.br} />

      <section className={styles.container}>
        <h1 className={cls(girassol.className, styles.header)}>
          DROP ALREADY AVAILABLE
        </h1>
        <div className={styles.firstRow}>
          <div>
            <Image className={styles.image} src={mainHoodie} />
            <p className={cls(gilroy.className, styles.description)}>
              Hoodie "pathetic bastard"
            </p>
            <p className={cls(gilroy.className, styles.description)}>
              2560 UAH
            </p>
            <button className={cls(gilroy.className, styles.button)}>
              More Info
            </button>
          </div>

          <div>
            <Image className={styles.image} src={mainHoodie} />
            <p className={cls(gilroy.className, styles.description)}>
              Hoodie "pathetic bastard"
            </p>
            <p className={cls(gilroy.className, styles.description)}>
              2560 UAH
            </p>
            <button className={cls(gilroy.className, styles.button)}>
              More Info
            </button>
          </div>
        </div>
        <div className={styles.secondRow}>
          <Image className={styles.image} src={mainHoodie} />
          <p className={cls(gilroy.className, styles.description)}>
            Hoodie "pathetic bastard"
          </p>
          <p className={cls(gilroy.className, styles.description)}>2560 UAH</p>
          <button className={cls(gilroy.className, styles.button)}>
            More Info
          </button>
        </div>
      </section>
    </main>
  )
}
