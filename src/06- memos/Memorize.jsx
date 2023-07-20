import { useState } from 'react'
import { useCounter } from '../hooks/useCounter'
import { Small } from './Small'

function Memorize () {
  const [show, setShow] = useState(true)
  const { counter, increment } = useCounter()
  return (
    <>
      <h1>Counter: <Small value={counter} /> </h1>
      <hr />

      <button
        className='btn btn-primary mt-2'
        onClick={() => increment()}
      >
        Incrementar
      </button>

      <button
        className='btn btn-primary mt-2'
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  )
}

export default Memorize
