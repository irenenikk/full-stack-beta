import blogService from '../../services/blogs'
import { getAllBlogs } from '../actions/blogActions'
import { createNotification, handleError } from './notificationActions'

export const submitBlog = (e) => {
  e.preventDefault()
  return async (dispatch, getState) => {
    const blog = {
      title: e.target.title.value,
      url: e.target.url.value,
      author: e.target.author.value
    }
    try {
      await blogService.postNewBlog(blog, getState().session.token)
      dispatch(getAllBlogs())
      dispatch(createNotification({ message: `Created new blog ${blog.title} by ${blog.author}` }))
    } catch (e) {
      dispatch(handleError(e))
    }
  }
}
