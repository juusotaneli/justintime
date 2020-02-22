import React from 'react'
import Leg from './Leg'
import UIKit from 'uikit'

const ResultHandler = ({ result }) => {
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

export default ResultHandler
