import { useState, useEffect } from 'react'
import Message from './Message'

function SimpleForm () {
  const [formState, setFormState] = useState({
    username: '',
    email: ''
  })
  const { username, email } = formState

  const inputOnChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const testButton = () => console.log(formState)

  useEffect(() => {
    console.log('¡Test enviado!')
  }, [])

  return (
    <>
      <h1>Formulario simple</h1>
      <hr />

      <input
        type='text'
        className='form-control'
        placeholder='Usuario'
        name='username'
        value={username}
        onChange={inputOnChange}
      />

      <input
        type='email'
        className='form-control mt-2'
        placeholder='Correo'
        name='email'
        value={email}
        onChange={inputOnChange}
      />

      <button onClick={testButton}>Probar</button>

      {
        (username === 'Facxp') && <Message />
      }
    </>
  )
}

export default SimpleForm
