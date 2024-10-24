'use client'

import { useCallback, useContext, useEffect } from 'react'
import { CartContext } from '../contexts/Cart/cartContext'

export function useLocalStorage(key, defaultValue) {
  // const [storedValue, setStoredValue] = useState(() => {
  //   const item = localStorage.getItem(key)
  //   console.log(item)
  //   if (item) return JSON.parse(item)
  //   localStorage.setItem(key, JSON.stringify(defaultValue))
  //   return defaultValue
  // })
  const { cart: storedValue, setCart: setStoredValue } = useContext(CartContext)

  useEffect(() => {
    const item = localStorage.getItem(key)
    if (item) {
      setStoredValue(JSON.parse(item))
      return
    }
    localStorage.setItem(key, JSON.stringify(defaultValue))
    setStoredValue(defaultValue)
  }, [])

  // useEffect(() => {
  //   console.log('1')
  //   const items = JSON.parse(localStorage.getItem(key))
  //   if (!items) {
  //     // localStorage.setItem(key, JSON.stringify(defaultValue))
  //     setCart(defaultValue)
  //     return
  //   }
  //   setCart(items)
  // }, [])

  // useEffect(() => {
  //   console.log('3')
  //   localStorage.setItem(key, JSON.stringify(cart))
  // }, [cart])

  const setValue = useCallback(
    value => {
      setStoredValue(value)
      localStorage.setItem(key, JSON.stringify(value))
    },
    [key]
  )

  useEffect(() => {
    const onStorage = () => {
      setStoredValue(JSON.parse(localStorage.getItem(key)))
    }

    window.addEventListener('storage', onStorage)

    return () => {
      window.removeEventListener('storage', onStorage)
    }
  }, [key])

  return [storedValue, setValue]
}
