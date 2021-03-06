import React from 'react'
import s from '../subway.png'

const Metro = ({ leg, percentage }) => {
  const metroStyle = {
    backgroundColor: '#e87b7b',
    width: percentage * 100 + '%',
    color: 'black'
  }
  return (
    <td style={metroStyle} className='uk-border-pill uk-text-center'>
      <img src={s} alt='' width='15px'></img> {leg.trip.routeShortName}{' '}
    </td>
  )
}
export default Metro
