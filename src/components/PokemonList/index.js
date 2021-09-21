import { useEffect } from 'react'
import { useStatePersist } from 'use-state-persist'
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap
} from 'react-grid-dnd'

import { usePokemonContext } from '../../stores'
import PokemonCard from '../PokemonCard'

export default function PokemonList() {
  const { pokemons } = usePokemonContext()
  const [sortedPokemons, setSortedPokemons] = useStatePersist(
    'sortedPokemons',
    []
  )

  function onChange(_, sourceIndex, targetIndex) {
    const nextState = swap(sortedPokemons, sourceIndex, targetIndex)
    setSortedPokemons(nextState)
  }

  useEffect(() => {
    sortedPokemons.length === 0 && setSortedPokemons(pokemons)
  }, [pokemons])

  return (
    <GridContextProvider onChange={onChange}>
      <GridDropZone
        id="items"
        boxesPerRow={4}
        rowHeight={200}
        className="mt-16 min-h-screen"
      >
        {sortedPokemons?.map(({ data }) => (
          <GridItem key={data.id} className="flex-center">
            <PokemonCard pokemon={data} />
          </GridItem>
        ))}
      </GridDropZone>
    </GridContextProvider>
  )
}
