import React, { useState, useEffect } from 'react'
import JourneySegmentsDisplay from './JourneySegmentsDisplay'

const Leg = ({ i }) => {
  const [legs, setLegs] = useState([])

  useEffect(() => {
      setLegs(i.legs)
  }, [i.legs])

  return (
    <div>
      <JourneySegmentsDisplay legs={legs} />
    </div>
  )
}

export default Leg
