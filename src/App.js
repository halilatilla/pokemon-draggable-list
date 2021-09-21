import { useEffect } from 'react'
import { useQuery, useQueries } from 'react-query'

import { usePokemonContext } from './stores'
import { PokeList } from './components'
import { getPokemonByLimit, getPokemonByUrl } from './api'

const App = () => {
  const { setPokemons } = usePokemonContext()

  const { data, isLoading } = useQuery(
    'pokemonUrl',
    () => getPokemonByLimit(16),
    { initialData: [] }
  )

  const pokemons = useQueries(
    data?.map(res => {
      return {
        queryKey: ['pokemons', res.url],
        queryFn: () => getPokemonByUrl(res.url)
      }
    })
  )

  const allSuccess = pokemons.every(num => num.isSuccess === true)

  useEffect(() => {
    allSuccess && setPokemons(pokemons)
  }, [allSuccess])

  return (
    <div className="container mx-auto">
      {isLoading ? 'Loading...' : <PokeList />}
    </div>
  )
}

export default App
