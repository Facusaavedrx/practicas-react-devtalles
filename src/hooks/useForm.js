import { useState } from 'react'

export function useForm (initialForm = {}) {
  const [formState, setFormState] = useState(initialForm)

  const inputOnChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  return {
    ...formState,
    formState,
    inputOnChange
  }
}
