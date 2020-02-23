import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {
  ApolloClient, ApolloProvider, HttpLink, InMemoryCache
} from '@apollo/client'
import 'uikit/dist/css/uikit.min.css'
import 'uikit/dist/js/uikit-icons.min.js'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql',
  })
})


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
