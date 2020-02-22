import React from 'react'
import w from '../walk.png'

const Walk = ({ leg, percentage }) => {
  const walkStyle = {
    backgroundColor: '#FDFAA9',
    width: percentage * 100 + '%'
  }
  return (
    <td style={walkStyle} className='uk-border-pill uk-text-center'>
      <img src={w} alt='' width='15px'></img>
    </td>
  )
}
export default Walk
