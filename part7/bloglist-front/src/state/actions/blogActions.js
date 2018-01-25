import blogService from '../../services/blogs'
import { handleError, createNotification } from '../actions/notificationActions'

export const SET_ALL_BLOGS = 'SET_ALL_BLOGS'

export const setAllBlogs = (blogs) => {
  return {
    type: SET_ALL_BLOGS,
    blogs,
  }
}

export const getAllBlogs = () => {
  return async (dispatch) => {
    try {
      const resp = await blogService.getAll()
      dispatch(setAllBlogs(resp))
    } catch (e) {
      dispatch(handleError(e))
    }
  }
}


export const handleBlogLike = (blog) => {
  return async (dispatch, getState) => {
    try {
      await blogService.updateBlog(blog, getState().session.token)
      dispatch(getAllBlogs())
      dispatch(createNotification({ message: `Updated blog ${blog.title} by ${blog.author}` }))
    } catch (e) {
      dispatch(handleError(e))
    }
  }
}

export const handleDeleteBlog = (blog) => {
  return async (dispatch, getState) => {
    if (window.confirm(`Delete ${blog.title}?`)) {
      try {
        await blogService.deleteBlog(blog, getState().session.token)
        dispatch(getAllBlogs())
        dispatch(createNotification({ message: `Deleted blog ${blog.title} by ${blog.author}` }))
      } catch (e) {
        dispatch(handleError(e))
      }
    }
  }
}

