import Axios from 'axios'

export const fetch = Axios.create({
  baseURL: process.env.REACT_APP__BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
