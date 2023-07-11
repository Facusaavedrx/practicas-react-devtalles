import { useState, useEffect } from 'react'

export function useFetch (url) {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null
  })

  const getFetch = async () => {
    const res = await fetch(url)
    const data = await res.json()

    setState({
      data,
      isLoading: false,
      hasError: null
    })
  }

  useEffect(() => {
    getFetch()
  }, [url])

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  }
}