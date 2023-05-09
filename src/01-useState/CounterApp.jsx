import { useState } from 'react'

function CounterApp () {
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30
  })
  const { counter1, counter2, counter3 } = counter

  return (
    <>
      <h1>Counter 1: {counter1} </h1>
      <h1>Counter 2: {counter2} </h1>
      <h1>Counter 3: {counter3} </h1>
      <hr />
      <button
        className='btn btn-primary'
        onClick={() => setCounter({
          ...counter,
          counter1: counter1 + 1
        })}
      >
        Aumentar Contador 1
      </button>

      <button
        className='btn btn-danger'
        onClick={() => setCounter({
          ...counter,
          counter2: counter2 + 1
        })}
      >
        Aumentar Contador 2
      </button>

      <button
        className='btn btn-success'
        onClick={() => setCounter({
          ...counter,
          counter3: counter3 + 1
        })}
      >
        Aumentar Contador 3
      </button>
    </>
  )
}

export default CounterApp
