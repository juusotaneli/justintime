import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import JourneySegmentsDisplay from './JourneySegmentsDisplay'

test('component renders content', () => {
  const leg1 = {
    mode: 'TRAM',
    duration: 60000,
    distance: 500,
    trip: {
      routeShortName: 'TRAM #9'
    },
    to: {
      name: 'Töölö'
    },
    from: {
      name: 'Hima'
    }

  }
  const leg2 = {
    mode: 'SUBWAY',
    duration: 70000,
    distance: 700,

    trip: {
      routeShortName: 'M2'
    },
    to: {
      name: 'Töölö'
    },
    from: {
      name: 'Steissi'
    }

  }
  const leg3 = {
    mode: 'WALK',
    duration: 200000,
    distance: 1000,

    trip: {
      routeShortName: ''
    },
    to: {
      name: 'Stokkan Herkku'
    },
    from: {
      name: 'Steissi'
    }

  }
  const legs = [leg1, leg2, leg3]

  const component = render(
    <JourneySegmentsDisplay legs={legs}></JourneySegmentsDisplay>
  )
  expect(component.container).toHaveTextContent('TRAM #9')
})
