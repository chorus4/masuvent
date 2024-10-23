import { useCallback } from 'react'
import { useLocalStorage } from './useLocalStorage'

export function useCart() {
  const { value, setValue } = useLocalStorage('cart', [])

  const submit = data => {
    if (value.find(e => e.color == data.color && e.size == data.size)) {
      return
    }

    setValue([
      ...value,
      {
        ...data,
        count: 1,
      },
    ])
  }

  const isBought = useCallback(
    product => {
      console.log(value, 'e')
      console.log(product, 'or')
      if (!value) return
      if (
        value.find(e => {
          console.log(e.color == product.color && e.size == product.size, 'tre')
          return e.color == product.color && e.size == product.size
        })
      )
        return true
      return false
    },
    [value]
  )

  return { cart: value, setCart: setValue, submit, isBought }
}
