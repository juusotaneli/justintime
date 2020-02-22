import React from 'react'
import Bus from './Bus'
import Metro from './Metro'
import Tram from './Tram'
import Walk from './Walk'
import Train from './Train'
import TextComponent from './TextComponent'
import TravelTimeDisplay from './TravelTimeDisplay'

const JourneySegmentsDisplay = ({ legs }) => {
  let totalDuration = legs.reduce((total, leg) => total + leg.duration, 0)

  console.log(totalDuration)
  console.log(legs)

  return (
    <>
      <table className='uk-table uk-table-middle uk-width-expand' bgcolor="#f0f0f0">
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
          <tr className='uk-table uk-width-expand'>
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
export default JourneySegmentsDisplay
