import { useCallback, useEffect, useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

export function useCart() {
  const [cart, setCart] = useLocalStorage('cart', [])
  const [allCount, setAllCount] = useState(0)

  const submit = data => {
    if (
      cart.find(
        e => e.color == data.color && e.size == data.size && e.type == data.type
      )
    ) {
      let vv = [...cart]
      vv[
        cart.findIndex(
          e =>
            e.color == data.color && e.size == data.size && e.type == data.type
        )
      ].count++
      setCart(vv)
      return
    }

    setCart([
      ...cart,
      {
        ...data,
        count: 1,
      },
    ])
  }

  const isBought = useCallback(product => {
    if (!cart) return
    if (
      cart.find(e => {
        return (
          e.color == product.color &&
          e.size == product.size &&
          e.type == product.type
        )
      })
    )
      return true
    return false
  }, [])

  const getAmount = useCallback(product => {
    if (!cart) return
    const count =
      cart[
        cart.findIndex(
          e =>
            e.color == product.color &&
            e.size == product.size &&
            e.type == product.type
        )
      ]?.count
    return count
  }, [])

  const increase = item => {
    if (
      cart.find(
        e => e.color == item.color && e.size == item.size && e.type == item.type
      )
    ) {
      let vv = [...cart]
      vv[
        cart.findIndex(
          e =>
            e.color == item.color && e.size == item.size && e.type == item.type
        )
      ].count++
      setCart(vv)
      return
    }
  }

  const decrease = item => {
    if (
      cart.find(
        e => e.color == item.color && e.size == item.size && e.type == item.type
      )
    ) {
      let vv = [...cart]

      if (
        vv[
          cart.findIndex(
            e =>
              e.color == item.color &&
              e.size == item.size &&
              e.type == item.type
          )
        ].count < 2
      ) {
        vv.splice(
          cart.findIndex(
            e =>
              e.color == item.color &&
              e.size == item.size &&
              e.type == item.type
          ),
          1
        )

        setCart(vv)
        return
      }
      vv[
        cart.findIndex(
          e =>
            e.color == item.color && e.size == item.size && e.type == item.type
        )
      ].count--
      setCart(vv)
      return
    }
  }

  const deleteItem = item => {
    if (
      cart.find(
        e => e.color == item.color && e.size == item.size && e.type == item.type
      )
    ) {
      let vv = [...cart]

      vv.splice(
        cart.findIndex(
          e =>
            e.color == item.color && e.size == item.size && e.type == item.type
        ),
        1
      )

      setCart(vv)
    }
  }

  useEffect(() => {
    if (!cart) return
    const counts = cart.reduce(
      (accumulator, currentValue) => accumulator + currentValue.count,
      0
    )
    setAllCount(counts)
  }, [cart])

  const getAllCount = useCallback(() => {
    if (!cart) return
    const counts = cart.reduce(
      (accumulator, currentValue) => accumulator + currentValue.count,
      0
    )
    console.log(allCount)
    return allCount
  }, [])

  return {
    cart,
    setCart,
    submit,
    isBought,
    getAmount,
    allCount,
    getAllCount,
    increase,
    decrease,
    deleteItem,
  }
}
