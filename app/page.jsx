'use client'

import cls from 'classname'
import { Girassol } from 'next/font/google'
import localFont from 'next/font/local'
import Image from 'next/image'
import br from './img/br.svg'
import mainHoodie from './img/hoodie/mainhoodie.png'
import Pants from './img/pants/pants.png'
import PatchedHoodie from './img/patchedHoodie/PatchedHoodie.png'
import Zip from './img/zip/MainZip.png'
import styles from './page.module.scss'
import prices from './prices'

const girassol = Girassol({
  subsets: ['latin'],
  weight: '400',
})
const gilroy = localFont({ src: './fonts/Gilroy-Medium.woff' })

export default function Home() {
  return (
    <main className={styles.main}>
      <a
        href={false ? '/buy/hoodie' : ''}
        className={styles.container}
        onClick={e => e.preventDefault()}
      >
        {/* <h1 className={cls(girassol.className, styles.header)}>
          NEW DROP AVAILABLE
        </h1> */}
        <Image className={styles.image} src={mainHoodie} />
        <p className={cls(gilroy.className, styles.description)}>
          Hoodie "pathetic bastard"
        </p>
        <p className={cls(gilroy.className, styles.price)}>
          {prices.hoodie} UAH
        </p>
        <button className={cls(gilroy.className, styles.button)} disabled>
          Sold out
        </button>
      </a>

      <Image src={br} className={styles.br} />

      <section className={styles.container}>
        {/* <h1 className={cls(girassol.className, styles.header)}>
          DROP ALREADY AVAILABLE
        </h1> */}
        <div className={styles.firstRow}>
          <a href={false ? '/buy/zip' : ''} onClick={e => e.preventDefault()}>
            <Image className={styles.image} src={Zip} />
            <p className={cls(gilroy.className, styles.description)}>
              Zip "promised weakness"
            </p>
            <p className={cls(gilroy.className, styles.description)}>
              {prices.zip} UAH
            </p>
            <button disabled className={cls(gilroy.className, styles.button)}>
              Sold out
            </button>
          </a>

          <a href='/buy/pants'>
            <Image className={styles.image} src={Pants} />
            <p className={cls(gilroy.className, styles.description)}>
              Pants "fake blood"
            </p>
            <p className={cls(gilroy.className, styles.description)}>
              {prices.pants} UAH
            </p>
            <button className={cls(gilroy.className, styles.button)}>
              Buy
            </button>
          </a>
        </div>
        <a href='/buy/patchedHoodie' className={styles.secondRow}>
          <Image className={styles.image} src={PatchedHoodie} />
          <p className={cls(gilroy.className, styles.description)}>
            Patched Hoodie "promised weakness"
          </p>
          <p className={cls(gilroy.className, styles.description)}>
            {prices.patchedHoodie} UAH
          </p>
          <button className={cls(gilroy.className, styles.button)}>Buy</button>
        </a>
      </section>
    </main>
  )
}
