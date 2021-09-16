import PokemonCard from '../PokemonCard'

export default function PokemonList({ pokemons }) {
  return (
    <div className="grid grid-cols-4 gap-8 place-items-center">
      {pokemons.length > 0 &&
        pokemons.map(({ data }) => (
          <PokemonCard key={data?.id} pokemon={data} />
        ))}
    </div>
  )
}
