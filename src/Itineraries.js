import React from 'react'
import Leg from './Leg'

const Itineraries = ({ result }) => {
  if (result.loading) {
    return <div>loading...</div>
  }
  let n = 1
  return (
    <div>
      {result.data.plan.itineraries.map(itineraries => (
        <Leg key={n++} i={itineraries} />
      ))}
    </div>
  )
}

export default Itineraries
