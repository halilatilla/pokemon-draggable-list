//import { useState, useEffect } from 'react'
import { useStatePersist as useState } from 'use-state-persist'
import Draggable from 'react-draggable'

export default function PokemonCard({ pokemon }) {
  const [defaultPositions, setDefaultPositions] = useState('test', {})

  const onHandlePosition = data =>
    setDefaultPositions({
      ...defaultPositions,
      [pokemon?.id]: { x: data.x, y: data.y }
    })

  return (
    <Draggable
      defaultPosition={defaultPositions[pokemon?.id]}
      onStop={(e, data) => onHandlePosition(data)}
    >
      <div className="border rounded w-36  h-36 flex-center flex-col shadow bg-white cursor-move ">
        <img
          src={pokemon?.sprites?.front_default}
          alt={pokemon?.name}
          className="pointer-events-none"
        />
        {pokemon?.name}
      </div>
    </Draggable>
  )
}
