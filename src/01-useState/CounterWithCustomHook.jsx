import { useCounter } from '../hooks/useCounter'

function CounterWithCustomHook () {
  const { counter, increment, decrement, reset } = useCounter()
  return (
    <>
      <h1>Counter with custom hook: {counter} </h1>
      <hr />

      <button className='btn btn-primary' onClick={() => increment(50)}>+1</button>
      <button className='btn btn-danger' onClick={reset}>Reset</button>
      <button className='btn btn-success' onClick={() => decrement(10)}>-1</button>
    </>
  )
}

export default CounterWithCustomHook
