import axios from 'axios'

const url = `${process.env.REACT_APP_BASEURL}/blogs`

const getAll = async () => {
  const response = await axios.get(url)
  return response.data
}

export default { getAll}
