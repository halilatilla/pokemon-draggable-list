import axios from 'axios'

import { fetch } from './fetch'

export const getPokemonByLimit = async limit => {
  const result = await fetch(`/pokemon/?limit=${limit}&offset=${limit}`)

  return result.data.results
}

export const getPokemonByUrl = async url => {
  const result = await axios(url)

  return result.data
}
