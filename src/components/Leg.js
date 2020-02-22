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
const byFoot = leg => {
  return (
    <div>
      lähtö {new Date(leg.startTime).toLocaleString()} perillä{' '}
      {new Date(leg.endTime).toLocaleString()} jalkapatikkaa
    </div>
  )
}
const byVehicle = leg => {
  return (
    <div>
      lähtö {new Date(leg.startTime).toLocaleString()} perillä{' '}
      {new Date(leg.endTime).toLocaleString()} Kulkuneuvo {leg.mode}{' '}
      {leg.trip.routeShortName}
    </div>
  )
}

export default Leg
