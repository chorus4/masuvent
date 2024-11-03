'use client'

import cls from 'classname'
import localFont from 'next/font/local'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from './checkout.module.scss'
import './checkout.scss'

const gilroy = localFont({ src: '../fonts/Gilroy-Medium.woff' })

export default function Checkout() {
  const { register, handleSubmit, formState, watch } = useForm()
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

  return (
    <main className={cls(gilroy.className, styles.main)}>
      <div className={styles.container}>
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
        <input className={gilroy.className} type='text' placeholder='PROMO' />

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

        <button className={styles.modalButton} onClick={handleSubmit(onSubmit)}>
          Confirm
        </button>
      </div>
    </main>
  )
}
