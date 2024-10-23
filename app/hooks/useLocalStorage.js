import { useEffect, useState } from 'react'

export function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(JSON.parse(localStorage.getItem(key)))

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(key))
    console.log(items, 'awd')
    if (!items) {
      console.log('Break')
      // localStorage.setItem(key, JSON.stringify(defaultValue))
      setValue(defaultValue)
      return
    }
    setValue(items)
  }, [])

  useEffect(() => {
    console.log(value, 'qwer')
    localStorage.setItem(key, JSON.stringify(value))
  }, [value])

  return { value, setValue }
}
