import React from 'react'
import Leg from './Leg'

const ResultHandler = ({ result }) => {

  let n = 1
  const headerStyle = {
    color: '#edcece',
    fontWeight: 'bold'
  }
  return (
    <div>
      <h1 style={headerStyle}>Timetables</h1>
      {result.data.plan.itineraries.map(itineraries => (
        <Leg key={n++} i={itineraries} />
      ))}
    </div>
  )
}

export default ResultHandler
