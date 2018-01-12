import axios from 'axios'

const url = `${process.env.REACT_APP_BASEURL}/blogs`

const tokenize = (token) => {
  return `bearer ${token}`
}

const handleResponse = (response) => {
  if (response.statusText !== "OK") {
    throw new Error(response.data)
  }
  return response.data
}

const getAll = async () => {
  const response = await axios.get(url)
  return handleResponse(response)
}

const postNewBlog = async (newBlog, authorization) => {
  const token = tokenize(authorization)
  const config = {
    headers: { 'Authorization': token }
  }
  const response = await axios.post(url, newBlog, config)
  return handleResponse(response)
}

export default { getAll, postNewBlog }
