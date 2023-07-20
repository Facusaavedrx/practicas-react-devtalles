import { memo } from 'react'

export const Small = memo(({ value }) => {
  return (
    <small> {value} </small>
  )
})
// Memo guarda en memoria el componente completo y no lo re-renderiza en cada cambio
