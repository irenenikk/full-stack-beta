const blogsRouter = require('express').Router();
const Blog = require('../models/blog')

const validateBlog = (blog) => {
  let errors = []
  if (!blog.title) {
    errors.push("Blog must have a title")
  }
  if (!blog.url) {
    errors.push("Blog must have an url")
  }
  return errors
}

blogsRouter.get('', async (request, response) => {
  const blogs = await Blog.find()
  response.json(blogs)
})

blogsRouter.post('', async (request, response) => {
  const blog = request.body
  const errors = validateBlog(blog)
  if (errors.length > 0) {
    return response.status(400).json(errors)
  }
  const blogObj = await
                  new Blog({
                      ...blog,
                      likes: (blog.likes? blog.likes : 0)
                    })
                    .save()
  response.status(201).json(blogObj)
})

module.exports = blogsRouter
