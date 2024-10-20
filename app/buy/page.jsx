'use client'

import axios from 'axios'
import cls from 'classname'
import localFont from 'next/font/local'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Transition } from 'react-transition-group'
import Cart from '../cart/Cart'
import { API_URL } from '../config'
import cross from '../img/cross.svg'
import mainHoodie from '../img/mainhoodie.png'
import miniHoodie from '../img/mini-hoodie.svg'
import styles from './buy.module.scss'
import './buy.scss'

const gilroy = localFont({ src: '../fonts/Gilroy-Medium.woff' })

export default function Buy() {
  const [isModal, setIsModal] = useState(false)
  const { register, handleSubmit, formState, watch } = useForm({
    defaultValues: {
      size: 'BABY',
    },
  })
  const [isError, setIsError] = useState(false)
  const deliveryType = watch('deliveryType')

  const onSubmit = async s => {
    try {
      const resp = await axios.post(
        `${API_URL}/payment/createPayment`,
        {
          ...s,
          country: deliveryType !== 'europe' ? 'Украина' : s.country,
        },
        {
          fetchOptions: {},
        }
      )
      window.location.href = resp.data.pageUrl
    } catch {
      setIsError(true)
    }
  }

  const closeModal = () => {
    // e.preventDefault()
    setIsModal(false)
  }

  return (
    <main className={cls(gilroy.className, styles.main)}>
      <Cart />
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
            value={'BABY'}
            {...register('size')}
          />
          <label htmlFor='baby'>BABY</label>

          <input
            type='radio'
            name='size'
            id='xxl'
            value={'BIG'}
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
              <Image
                src={cross}
                className={styles.cross}
                onClick={closeModal}
              />
              <div className={styles.info}>
                <Image src={miniHoodie} className={styles.modalImage} />
                <p>
                  <span>Hoodie pathetic bastard</span>
                  <span className={styles.modalSize}>
                    Size: {watch('size')}
                  </span>
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

              <label>Адрес/Отделение НП</label>
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

              <label>Тип доставки</label>
              <select {...register('deliveryType')}>
                <option value='ukraine' defaultChecked>
                  По Украине
                </option>
                <option value='europe'>Международная доставка</option>
              </select>

              {/* {deliveryType == 'europe' && (
                <>
                  <label>Страна доставки</label>
                  <input
                    type='text'
                    {...register('country')}
                    placeholder='Германия'
                  />
                </>
              )} */}

              <label
                className={cls({
                  [styles.labelDisabled]: deliveryType !== 'europe',
                })}
              >
                Страна доставки
              </label>
              <input
                type='text'
                id={cls({
                  error: formState.errors['country']?.message != undefined,
                })}
                {...register('country', {
                  required: deliveryType == 'europe',
                })}
                placeholder='Германия'
                disabled={deliveryType !== 'europe'}
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

              <label>Номер телефона</label>
              <input
                className={gilroy.className}
                type='text'
                id={cls({
                  error: formState.errors['phone']?.message != undefined,
                })}
                placeholder='+380123456789'
                {...register('phone', {
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
                  {...register('paymentType', {
                    required: true,
                  })}
                />
                <span>Оплата картой</span>
              </label>
              <label htmlFor='pay' className={styles.paymentCard}>
                <input
                  type='radio'
                  name='payment'
                  id='pay'
                  value={'card'}
                  {...register('paymentType', {
                    required: true,
                  })}
                />
                <span>Apple pay/Google pay</span>
              </label>
              <label htmlFor='nalozh' className={styles.paymentRadio}>
                <input
                  type='radio'
                  name='payment'
                  id='nalozh'
                  value={'nalozh'}
                  {...register('paymentType', {
                    required: true,
                  })}
                />
                <span>Наложеный платеж</span>
              </label>

              {isError && (
                <span className={styles.error}>
                  Произошла ошибка, повторите попытку позже
                </span>
              )}

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
