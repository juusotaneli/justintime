import React, { useState } from 'react'

const Leg = ({ i }) => {
  const [legs, setLegs] = useState([])
  if (legs.length === 0) {
    setLegs(i.legs)
  }

  if (legs.length > 0) {
    return (
      <div>
        {legs.map(leg => (
          <div key={leg.distance}>
            {leg.trip === null && byFoot(leg)}
            {leg.trip && byVehicle(leg)}
          </div>
        ))}
        <br />
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
