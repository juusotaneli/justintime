import React, { useState } from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import Itineraries from './Itineraries'

import axios from 'axios'

const baseUrl = 'https://api.digitransit.fi/geocoding/v1/search?text=sup+espoo&lang=fi'

//eficode 60.1693803,24.9236575
//koti 60.188669,24.955619

const ALL_STOPS = gql`
{
  stopsByRadius(lat:60.169, lon:24.923, radius:400) {
    edges {
      node {
        stop {
          gtfsId
          name
        }
        distance
      }
    }
  }
}`
  

const ITINERARIES = gql`
{
  plan(
    from: {lat: 60.1887008, lon: 24.9535068}
    to: {lat: 60.1693803, lon: 24.9236575}
    numItineraries: 20,
    walkSpeed: 1.7,
  ) {
    itineraries {
      legs {
        startTime
        endTime
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
const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

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

  const [routes, setRoutes] = useState([])
  return (
    <Query query={ITINERARIES}>
      {(result) => <Itineraries result={result} />}
    </Query>
  )
}
export default App;
