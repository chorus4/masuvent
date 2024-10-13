'use client'

import cls from 'classname'
import localFont from 'next/font/local'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Transition } from 'react-transition-group'
import mainHoodie from '../img/mainhoodie.png'
import miniHoodie from '../img/mini-hoodie.svg'
import styles from './buy.module.scss'
import './buy.scss'

const gilroy = localFont({ src: '../fonts/Gilroy-Medium.woff' })

export default function Buy() {
  const [isModal, setIsModal] = useState(false)
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      size: 'baby',
    },
  })
  const emailError = formState.errors['email']?.message != undefined


  console.log(formState.errors.email);

  const onSubmit = s => {
    console.log(s)
  }

  const closeModal = () => {
    // e.preventDefault()
    setIsModal(false)
  }

  return (
    <main className={cls(gilroy.className, styles.main)}>
      <Image src={mainHoodie} className={styles.image} />

      <div className={styles.rightSection}>
        <h2>
          Hoodie
          <br /> "pathetic bastard"
        </h2>
        <p>
          <span>Material: японский</span>
          <span>плюш, оверсайз крой,</span>
          <span>все принты выполнены</span>
          <span>качественной вышивкой</span>
        </p>
        <div className={styles.size}>
          <span>SIZE</span>

          <input
            type='radio'
            name='size'
            id='baby'
            value={'baby'}
            {...register('size')}
          />
          <label htmlFor='baby'>BABY</label>

          <input
            type='radio'
            name='size'
            id='xxl'
            value={'xxl'}
            {...register('size')}
          />
          <label htmlFor='xxl'>BIG</label>
        </div>
        <button className={styles.button} onClick={() => setIsModal(true)}>
          BUY
        </button>
      </div>

      <Transition in={isModal} timeout={500}>
        {state => (
          <div
            className={cls(styles.modal, 'modal', state)}
            onClick={closeModal}
          >
            <div
              className={styles.modalContent}
              onClick={e => e.stopPropagation()}
            >
              <div className={styles.info}>
                <Image src={miniHoodie} className={styles.modalImage} />
                <p>
                  <span>Hoodie pathetic bastard</span>
                  <span className={styles.modalSize}>Size</span>
                </p>
                <h2 className={styles.modalPrice}>2400 UAH</h2>
              </div>

              <label> Email </label>
              <input
                className={cls(gilroy.className)}
                type='text'
                id={cls({
                  error: formState.errors['email']?.message != undefined,
                })}
                placeholder='yourname@gmail.com'
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                })}
              />

              <label>ФИО</label>
              <input
                className={gilroy.className}
                type='text'
                id={cls({
                  error: formState.errors['fio']?.message != undefined,
                })}
                placeholder='Лотусов Лотус Лотусович'
                {...register('fio', {
                  required: true,
                })}
              />

              <label>Адрес</label>
              <input
                className={gilroy.className}
                type='text'
                id={cls({
                  error: formState.errors['address']?.message != undefined,
                })}
                placeholder='Новая почта отделение 22 '
                {...register('address', {
                  required: true,
                })}
              />

              <label>Город</label>
              <input
                className={gilroy.className}
                type='text'
                id={cls({
                  error: formState.errors['city']?.message != undefined,
                })}
                placeholder='Киев'
                {...register('city', {
                  required: true,
                })}
              />

              <label>Обратная связь</label>
              <input
                className={gilroy.className}
                type='text'
                id={cls({
                  error: formState.errors['feedback']?.message != undefined,
                })}
                placeholder='Ваш телеграм, или номер'
                {...register('feedback', {
                  required: true,
                })}
              />

              <label>Промокод</label>
              <input
                className={gilroy.className}
                type='text'
                placeholder='PROMO'
              />

              <label className={styles.paymentLabel}>Способы оплаты</label>
              <label htmlFor='card' className={styles.paymentCard}>
                <input
                  type='radio'
                  name='payment'
                  id='card'
                  value={'card'}
                  {...register('payment')}
                />
                <span>Оплата картой</span>
              </label>
              <label htmlFor='pay' className={styles.paymentCard}>
                <input
                  type='radio'
                  name='payment'
                  id='pay'
                  value={'card'}
                  {...register('payment')}
                />
                <span>Apple pay/Google pay</span>
              </label>
              <label htmlFor='nalozh' className={styles.paymentRadio}>
                <input
                  type='radio'
                  name='payment'
                  id='nalozh'
                  value={'nalozh'}
                  {...register('payment')}
                />
                <span>Наложеный платеж</span>
              </label>

              <button
                className={styles.modalButton}
                onClick={handleSubmit(onSubmit)}
              >
                Confirm
              </button>
            </div>
          </div>
        )}
      </Transition>
    </main>
  )
}
