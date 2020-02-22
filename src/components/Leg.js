import React, { useState } from 'react'
import JourneySegments from './JourneySegments'

const Leg = ({ i }) => {
  const [legs, setLegs] = useState([])
  if (legs.length === 0) {
    setLegs(i.legs)
  }

  if (legs.length > 0) {
    return (
      <div>
        <JourneySegments legs = {legs} />
      </div>
    )
  }
}

export default Leg
