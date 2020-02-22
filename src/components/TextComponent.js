import React from 'react'

const TextComponent = ({ leg, percentage }) => {
  const textStyle = {
    width: percentage * 100 + '%'
  }
  return (
    <td style={textStyle} className='uk-text-center'>
      {new Date(leg.startTime).toLocaleString(navigator.language, {
        hour: '2-digit',
        minute: '2-digit'
      })}
      {leg.from.name === 'Origin' && <p>From home to {leg.to.name}</p>}
      {leg.to.name === 'Destination' && (
        <p>
          {' '}
          From {leg.from.name} to Work (arrival at{' '}
          {new Date(leg.startTime).toLocaleString(navigator.language, {
            hour: '2-digit',
            minute: '2-digit'
          })}
          )
        </p>
      )}
      {leg.to.name !== 'Destination' && leg.from.name !== 'Origin' && (
        <p>
          {' '}
          From {leg.from.name} to {leg.to.name}{' '}
        </p>
      )}
    </td>
  )
}
export default TextComponent
