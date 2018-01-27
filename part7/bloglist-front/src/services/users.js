import axios from 'axios'

const url = `${process.env.REACT_APP_BASEURL}/users`

const getAll = async () => {
  const response = await axios.get(url)
  return response.data
}

const createNew = async (user) => {
  const response = await axios.post(url, user)
  return response.data
}

export default {
  getAll,
  createNew
}
