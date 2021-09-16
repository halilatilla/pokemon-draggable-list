import { useQuery, useQueries } from 'react-query'

import { PokeList } from './components'
import { getPokemonByLimit, getPokemonByUrl } from './api'

const App = () => {
  const { isLoading, data } = useQuery(
    'pokemonUrl',
    () => getPokemonByLimit(16),
    { initialData: [] }
  )

  const pokemons = useQueries(
    data?.map(res => {
      return {
        queryKey: ['user', res.url],
        queryFn: () => getPokemonByUrl(res.url)
      }
    })
  )

  return (
    <div className="flex-center min-h-screen">
      <div className="container">
        {isLoading ? 'Loading...' : <PokeList pokemons={pokemons} />}
      </div>
    </div>
  )
}

export default App
