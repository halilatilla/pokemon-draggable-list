export default function PokemonCard({ pokemon }) {
  return (
    <div className="border rounded w-36 h-36 flex-center flex-col shadow bg-white cursor-move">
      <img
        src={pokemon?.sprites?.front_default}
        alt={pokemon?.name}
        className="pointer-events-none"
      />
      <p className="capitalize pointer-events-none">{pokemon?.name}</p>
    </div>
  )
}
