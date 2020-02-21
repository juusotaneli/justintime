import React from 'react'

const JourneySegments = ({ legs }) => {
  let totalDistance = legs.reduce((total, leg) => total + leg.distance, 0)

  console.log(legs)

  return (
    <table width='100%'>
      <tbody>
        <tr height='30px'>
          {legs.map(leg => (
            <React.Fragment key={leg.distance}>
              {leg.mode.includes('WALK') && (
                <Walk leg={leg} percentage={leg.distance / totalDistance} />
              )}
              {leg.mode.includes('TRAM') && (
                <Tram leg={leg} percentage={leg.distance / totalDistance} />
              )}
              {leg.mode.includes('SUBWAY') && (
                <Metro leg={leg} percentage={leg.distance / totalDistance} />
              )}
              {leg.mode.includes('BUS') && (
                <Bus leg={leg} percentage={leg.distance / totalDistance} />
              )}
            </React.Fragment>
          ))}
        </tr>
      </tbody>
    </table>
  )
}

const Walk = ({ leg, percentage }) => {
  const walkStyle = {
    backgroundColor: '#FDFAA9',
    width: percentage
  }
  return <td style={walkStyle}>{leg.mode} {(leg.duration/60).toFixed()} minutes</td>
}
const Tram = ({ leg, percentage }) => {
  const tramStyle = {
    backgroundColor: '#A9FDC2',
    width: percentage
  }
  return <td style={tramStyle}>{leg.mode} {leg.trip.routeShortName} - {(leg.duration/60).toFixed()} minutes</td>
}
const Metro = ({ leg, percentage }) => {
  const metroStyle = {
    backgroundColor: '#FDCAA9',
    width: percentage
  }
  return <td style={metroStyle}>{leg.mode} {leg.trip.routeShortName} - {(leg.duration/60).toFixed()} minutes</td>
}
const Bus = ({ leg, percentage }) => {
  const busStyle = {
    backgroundColor: '#A9FAFD',
    width: percentage
  }
  return <td style={busStyle}>{leg.mode} {leg.trip.routeShortName} - {(leg.duration/60).toFixed()} minutes</td>
}
const Train = ({ leg, percentage }) => {
  const busStyle = {
    backgroundColor: '#000000',
    width: percentage
  }
  return <td style={busStyle}>WE DO NOT USE TRAIN</td>
}
export default JourneySegments
