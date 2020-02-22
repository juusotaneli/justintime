import React from 'react'
import w from '../walk.png'
import s from '../subway.png'
import t from '../tram.png'
import b from '../bus.png'

const JourneySegments = ({ legs }) => {
  let totalDuration = legs.reduce((total, leg) => total + leg.duration, 0)

  console.log(totalDuration)
  console.log(legs)

  return (
    <>
      <table className='uk-table uk-table-middle'>
        <tbody>
          <tr>
            {legs.map(leg => (
              <React.Fragment key={leg.distance}>
                <TextComponent
                  leg={leg}
                  percentage={leg.duration / totalDuration}
                />
              </React.Fragment>
            ))}
          </tr>
          <tr >
            {legs.map(leg => (
              <React.Fragment key={leg.distance}>
                {leg.mode.includes('WALK') && (
                  <Walk leg={leg} percentage={leg.duration / totalDuration} />
                )}
                {leg.mode.includes('TRAM') && (
                  <Tram leg={leg} percentage={leg.duration / totalDuration} />
                )}
                {leg.mode.includes('SUBWAY') && (
                  <Metro leg={leg} percentage={leg.duration / totalDuration} />
                )}
                {leg.mode.includes('BUS') && (
                  <Bus leg={leg} percentage={leg.duration / totalDuration} />
                )}
                {leg.mode.includes('RAIL') && (
                  <Train leg={leg} percentage={leg.duration / totalDuration} />
                )}
              </React.Fragment>
            ))}
          </tr>
          <tr className='uk-table '>
            {legs.map(leg => (
              <React.Fragment key={leg.distance}>
                <TravelTimeDisplay
                  leg={leg}
                  percentage={leg.duration / totalDuration}
                />
              </React.Fragment>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  )
}
const TextComponent = ({ leg, percentage }) => {
  const textStyle = {
    width: percentage * 100 + '%'
  }
  return (
    <td style={textStyle}>
      {new Date(leg.startTime).toLocaleString(navigator.language, {
        hour: '2-digit',
        minute: '2-digit'
      })}
      {leg.from.name === 'Origin' && <p>From home to {leg.to.name}</p>}
      {leg.to.name === 'Destination' && <p>From {leg.from.name} to work </p>}
      {leg.to.name !== 'Destination' &&  leg.from.name !== 'Origin' && <p> From {leg.from.name} to {leg.to.name}</p>}
    </td>
  )
}
const TravelTimeDisplay = ({ leg, percentage }) => {
  const textStyle = {
    width: percentage * 100 + '%'
  }
  return (
    <td style={textStyle} className="uk-text-center">
      {(leg.duration / 60).toFixed()} min
    </td>
  )
}
const Walk = ({ leg, percentage }) => {
  const walkStyle = {
    backgroundColor: '#FDFAA9',
    width: percentage * 100 + '%'
  }
  return (
    <td style={walkStyle} className='uk-border-pill uk-text-center'>
       <img src={w} alt="" width="15px"></img>
    </td>
  )
}
const Tram = ({ leg, percentage }) => {
  const tramStyle = {
    backgroundColor: '#A9FDC2',
    width: percentage * 100 + '%',
  }
  return (
    <td style={tramStyle} className='uk-border-pill uk-text-center'>
      <img src={t} alt="" width="15px"></img> Number {leg.trip.routeShortName}
    </td>
  )
}
const Metro = ({ leg, percentage }) => {
  const metroStyle = {
    backgroundColor: '#FDCAA9',
    width: percentage * 100 + '%'
  }
  return (
    <td style={metroStyle} className='uk-border-pill uk-text-center'>
      <img src={s} alt="" width="15px"></img> {leg.trip.routeShortName} {' '}
    </td>
  )
}
const Bus = ({ leg, percentage }) => {
  const busStyle = {
    backgroundColor: '#A9FAFD',
    width: percentage * 100 + '%'
  }
  return (
    <td style={busStyle} className='uk-border-pill uk-text-center'>
      <img src={b} alt="" width="15px"></img> {leg.trip.routeShortName} {' '}
    </td>
  )
}
const Train = ({ leg, percentage }) => {
  const busStyle = {
    backgroundColor: '#000000',
    width: percentage * 100 + '%'
  }
  return <td style={busStyle}>WE DO NOT USE TRAIN</td>
}
export default JourneySegments
