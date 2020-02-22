import React from 'react'
import b from '../bus.png'

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
  export default Bus