import axios from 'axios'

const url = `${process.env.REACT_APP_BASEURL}/blogs`

const getConfig = (authorization) => {
  const token = `bearer ${authorization}`
  return {
    headers: { 'Authorization': token }
  }
}

const getAll = async () => {
  const response = await axios.get(url)
  return response.data
}

const postNewBlog = async (newBlog, token) => {
  const config = getConfig(token)
  const response = await axios.post(url, newBlog, config)
  return response.data
}

const updateBlog = async (newBlog, token) => {
  const config = getConfig(token)
  const response = await axios.put(`${url}/${newBlog._id}`, newBlog, config)
  return response.data
}

const deleteBlog = async (blog, authorization) => {
  const config = getConfig(authorization)
  const response = await axios.delete(`${url}/${blog._id}`, config)
  return response.data
}

export default { getAll, postNewBlog, updateBlog, deleteBlog }
