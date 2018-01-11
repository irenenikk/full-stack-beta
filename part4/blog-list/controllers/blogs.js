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

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find()
  response.json(blogs)
})

blogsRouter.post('/', async (request, response) => {
  const blog = request. body
  const errors = validateBlog(blog)
  if (errors.length > 0) {
    return response.status(400).send(errors.join("\n"))
  }
  const blogObj = await
                  new Blog({
                      ...blog,
                      likes: (blog.likes? blog.likes : 0)
                    })
                    .save()
  response.json(blogObj)
})

blogsRouter.delete('/:id', async (request, response) => {
  try {
    const id = request.params.id
    const blog = await Blog.findById(id)
    await blog.remove()
    response.json(blog)
  } catch (e) {
    response.status(400).send("Could not remove blog")
  }
})

blogsRouter.put('/:id', async (request, response) => {
  try {
    const blog = request.body
    const errors = validateBlog(blog)
    if (errors.length > 0) {
      return response.status(400).send(errors.join("\n"))
    }
    await Blog.findByIdAndUpdate(request.params.id, blog)
    const updatedBlog = await Blog.findById(request.params.id)
    response.status(201).json(updatedBlog)
  } catch (e) {
    response.status(400).send("Could not update blog")
  }
})

module.exports = blogsRouter
