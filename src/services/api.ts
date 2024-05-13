import axios from 'axios'

const api = axios.create()

export async function getStoreDetails() {
  const { data } = await api.get(
    'http://localhost:3000/products',
  )

  return data
}
