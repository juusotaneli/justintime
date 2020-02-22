import React from 'react'
import t from '../tram.png'

const Tram = ({ leg, percentage }) => {
  const tramStyle = {
    backgroundColor: '#e0ffd6',
    width: percentage * 100 + '%'
  }
  return (
    <td style={tramStyle} className='uk-border-pill uk-text-center'>
      <img src={t} alt='' width='15px'></img> Number {leg.trip.routeShortName}
    </td>
  )
}
export default Tram
