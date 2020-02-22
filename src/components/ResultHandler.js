import React from 'react'
import Leg from './Leg'

const ResultHandler = ({ result }) => {

  let n = 1
  return (
    <div>
      <h1>Timetables</h1>
      {console.log('jou')}
      {result.data.plan.itineraries.map(itineraries => (
        <Leg key={n++} i={itineraries} />
      ))}
    </div>
  )
}

export default ResultHandler
