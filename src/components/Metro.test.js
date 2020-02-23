import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Metro from './Metro'

test('component renders content', () => {
  const leg = {
    trip: {
      routeShortName: 'M2'
    }
  }
  const component = render(
    <table>
      <tbody>
        <tr>
          <Metro leg={leg} />
        </tr>
      </tbody>
    </table>
  )
  expect(component.container).toHaveTextContent(
    'M2'
  )
})