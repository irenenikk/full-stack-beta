import axios from 'axios'

const url = `${process.env.REACT_APP_BASEURL}/login`

const login = async ({ username, password }) => {
  try {
    const response = await axios.post(url, { username, password })
    return response.data
  } catch (e) {
    return e.message
  }
}

export default { login }
