import { useRef } from 'react'

function FocusScreen () {
  const inputRef = useRef()

  const onClick = () => {
    inputRef.current.select()
  }
  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        type='text'
        className='form-control'
        placeholder='Ingrese su nombre'
        ref={inputRef}
      />

      <button
        className='btn btn-primary mt-2'
        onClick={onClick}
      >
        Focus
      </button>
    </>
  )
}

export default FocusScreen
