import axios from 'axios'

const url = `${process.env.REACT_APP_BASEURL}/login`

const login = async ({ username, password }) => {
  const response = await axios.post(url, { username, password })
  return response.data
}

export default { login }
