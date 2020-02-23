import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Bus from './Bus'

test('component renders content', () => {
  const leg = {
    trip: {
      routeShortName: 'TRAM #9'
    }
  }
  const component = render(
    <table>
      <tbody>
        <tr>
          <Bus leg={leg} />
        </tr>
      </tbody>
    </table>
  )
  expect(component.container).toHaveTextContent('TRAM #9')
})
