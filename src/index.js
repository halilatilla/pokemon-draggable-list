import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import { PokemonProvider } from './stores'
import App from './App'

import './index.css'

const queryClient = new QueryClient()

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <PokemonProvider>
      <App />
    </PokemonProvider>
  </QueryClientProvider>,
  document.getElementById('root')
)
