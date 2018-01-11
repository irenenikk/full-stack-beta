const formatBlog = (blog) => {
  return { title: blog.title, author: blog.author, url: blog.url, likes: blog.likes }
}

module.exports = { formatBlog }
