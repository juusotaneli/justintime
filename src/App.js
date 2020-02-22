import React from 'react'
import { useQuery, gql } from '@apollo/client'
import ResultHandler from './components/ResultHandler'

//const baseUrl =
//'https://api.digitransit.fi/geocoding/v1/search?text=sup+espoo&lang=fi'

//eficode 60.1693803,24.9236575
//koti 60.188669,24.955619

const ITINERARIES = gql`
  {
    plan(
      from: { lat: 60.1887008, lon: 24.9535068 }
      to: { lat: 60.1693803, lon: 24.9236575 }
      numItineraries: 5
      walkSpeed: 1.6
    ) {
      itineraries {
        legs {
          startTime
          endTime
          from {
            name
            stop {
              code
              name
            }
          }
          to {
            name
            stop {
              code
              name
            }
          }
          mode
          duration
          realTime
          distance
          transitLeg
          trip {
            tripHeadsign
            routeShortName
          }
        }
      }
    }
  }
`

/* const App = () => {
  return <Query query={query}>
    {(result) => { 
      if ( result.loading ) {
        return <div>loading...</div>
      }
      return (
        <div>
          {result.data.stopsByRadius.edges.forEach(edge => {
            console.log(edge.node.stop.name)
          })}
          {console.log(getAll())}
        </div>
      )
    }}
  </Query>
*/

const App = () => {
  const result = useQuery(ITINERARIES, {
    pollInterval: 300000
  })
  console.log('tää')
  console.log(result)

  if (result.loading)  {
    return <div>loading...</div>
  }

  return (
    <div>
      <ResultHandler result = {result} />
    </div>
  )
}
export default App
