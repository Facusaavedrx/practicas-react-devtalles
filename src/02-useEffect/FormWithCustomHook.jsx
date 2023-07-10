import { useForm } from '../hooks/useForm'

function FormWithCustomHook () {
  const { formState, inputOnChange, username, email, password } = useForm({
    username: '',
    email: '',
    password: ''
  })
  const testButton = () => console.log(formState)

  return (
    <>
      <h1>Form with CustomHook</h1>
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

      <input
        type='password'
        className='form-control mt-2'
        placeholder='Contraseña'
        name='password'
        value={password}
        onChange={inputOnChange}
      />

      <button className='mt-2' onClick={testButton}>Probar</button>

    </>
  )
}

export default FormWithCustomHook
