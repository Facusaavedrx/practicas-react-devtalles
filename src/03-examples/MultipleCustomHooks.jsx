import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter'

function MultipleCustomHooks () {
  const { counter, increment, decrement } = useCounter(1)
  const { data, isLoading } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`)
  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading
        ? (
          <div className='alert alert-info text-center'>
            Loading...
          </div>
          )
        : (
          <blockquote className='blockquote text-end'>
            <p className='mb-1'>{data.name}</p>
            <footer className='blockquote-footer'> {data.species} </footer>
          </blockquote>
          )}

      <button className='btn btn-danger' onClick={() => decrement()}>
        Previous quote
      </button>

      <button className='btn btn-primary' onClick={() => increment()}>
        Next quote
      </button>

    </>
  )
}

export default MultipleCustomHooks
