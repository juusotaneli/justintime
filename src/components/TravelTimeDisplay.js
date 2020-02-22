import React from 'react'

const TravelTimeDisplay = ({ leg, percentage }) => {
  const textStyle = {
    width: percentage * 100 + '%'
  }
  return (
    <td style={textStyle} className='uk-text-center'>
      {(leg.duration / 60).toFixed()} min
    </td>
  )
}
export default TravelTimeDisplay
