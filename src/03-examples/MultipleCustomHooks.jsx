import { useFetch } from '../hooks/useFetch'

function MultipleCustomHooks () {
  const { data, isLoading, hasError } = useFetch('https://rickandmortyapi.com/api/character/3')
  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />
    </>
  )
}

export default MultipleCustomHooks
