import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Tram from './Tram'

test('component renders content', () => {
  const leg = {
    trip: {
      routeShortName: '#9'
    }
  }
  const component = render(
    <table>
      <tbody>
        <tr>
          <Tram leg={leg} />
        </tr>
      </tbody>
    </table>
  )
  expect(component.container).toHaveTextContent(
    '#9'
  )
})