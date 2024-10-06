import Image from 'next/image'
import styles from './buy.module.scss'
import mainHoodie from '../img/mainhoodie.png'
import localFont from 'next/font/local'
import cls from 'classname'
import './buy.scss'

const gilroy = localFont({ src: '../fonts/Gilroy-Medium.woff' })

export default function Buy() {
  return (
    <main className={cls(gilroy.className, styles.main)}>
      <Image src={mainHoodie} className={styles.image} />

      <div className={styles.rightSection}>
        <h2>Hoodie<br /> "pathetic bastard"</h2>
        <p>
          <span>Material: японский</span>
          <span>плюш, оверсайз крой,</span>
          <span>все принты выполнены</span>
          <span>качественной вышивкой</span>
        </p>
        <div className={styles.size}>
          <span>SIZE</span>

          <input type='radio' name='size' id='baby' />
          <label htmlFor='baby'>BABY</label>

          <input type='radio' name='size' id='xxl' />
          <label htmlFor='xxl'>XXL</label>
        </div>
        <button className={styles.button}>BUY</button>
      </div>
    </main>
  )
}
