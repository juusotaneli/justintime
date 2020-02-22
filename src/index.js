import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ApolloClient, { gql } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit-icons.min.js';

const client = new ApolloClient({
  uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql'
})


setInterval(() => {
  console.log('rendrr')
  refresh()
}, 300000)

const refresh = () => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById('root')
  )
}
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
