import React, { useState, useEffect } from 'react'

const TextComponentDisplay = ({ leg, percentage }) => {
  const [start, setStart] = useState('')
  const [destination, setDestination] = useState('')

  //this is here to shorten the super long 'Kauppakorkeakoulut' and 'Rautatieasema' stop names
  useEffect(() => {
    if (leg.to.name.includes('Kauppakorkea')) {
      setDestination('Kauppakorkea')
    }
    if (leg.from.name.includes('Kauppakorkea')) {
      setStart('Kauppakorkea')
    }
    if (leg.to.name.includes('Rautatieasema')) {
      setDestination('Steissi')
    }
    if (leg.from.name.includes('Rautatieasema')) {
      setStart('Steissi')
    }
    if (!start) {
      setStart(leg.from.name)
    }
    if (!destination) {
      setDestination(leg.to.name)
    }
  },[leg.to.name, leg.from.name, start, destination])

  const textStyle = {
    width: percentage * 100 + '%'
  }
  return (
    <td style={textStyle} className='uk-text-center'>
      {new Date(leg.startTime).toLocaleString(navigator.language, {
        hour: '2-digit',
        minute: '2-digit'
      })}
      {start === 'Origin' && <p>From home to {leg.to.name}</p>}
      {destination === 'Destination' && (
        <p>
          {' '}
          From {start} to Work (arrival at{' '}
          {new Date(leg.endTime).toLocaleString(navigator.language, {
            hour: '2-digit',
            minute: '2-digit'
          })}
          )
        </p>
      )}
      {destination !== 'Destination' && start !== 'Origin' && (
        <p>
          {' '}
          From {start} to {destination}{' '}
        </p>
      )}
    </td>
  )
}
export default TextComponentDisplay
