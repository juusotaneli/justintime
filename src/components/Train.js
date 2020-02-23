import React from 'react'
const Train = ({ percentage }) => {
  const busStyle = {
    backgroundColor: '#000000',
    width: percentage * 100 + '%'
  }
  return <td style={busStyle}>WE DO NOT USE TRAIN!</td>
}
export default Train
