const supertest = require('supertest')
const { app, server } = require('../index')
const api = supertest(app)
const Blog = require('../models/blog')

const initialBlogs = [
  {
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
  },
  {
    title: 'The paternity of an Index',
    author: 'Albert O. Hirschman',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Paternity_of_an_Index.pdf',
    likes: 4,
  },
  {
    title: 'The Elements Of Style: UNIX As Literature',
    author: 'Thomas Scoville',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Unix_as_Literature',
    likes: 2,
  }
]

beforeAll(async () => {
  await Blog.remove()

  const blogs = initialBlogs.map(b => new Blog(b))
  const promises = blogs.map(b => b.save())
  await Promise.all(promises)
})

describe('blogs api', () => {

  test('blogs are returned in json', async () => {
    await api
          .get('/api/blogs')
          .expect(200)
          .expect('Content-Type', /application\/json/)
  })
  test('all initial blogs are returned', async () => {
    const response = await api.get('/api/blogs')
    const content = response.body
                    .map(c => {
                      return { title: c.title, author: c.author, url: c.url, likes: c.likes }
                    })

    initialBlogs.forEach(b => expect(content).toContainEqual(b))
  })
  test('a valid blog can be added', async () => {
    const newBlog =   {
      title: "The Rise of ``Worse is Better''",
      author: 'Richard Gabriel',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Worse_is_Better',
      likes: 3,
    }

    await api
          .post('/api/blogs')
          .send(newBlog)
          .expect(201)
          .expect('Content-Type', /application\/json/)

    const response = await api.get('/api/blogs')

    const content = response.body
                    .map(c => {
                      return { title: c.title, author: c.author, url: c.url, likes: c.likes }
                    })

    expect(response.body.length).toBe(initialBlogs.length + 1)
    expect(content).toContainEqual(newBlog)
  })
  test('if likes is empty it is set to zero', async () => {
    const newBlogWithoutLikes =   {
      title: "The Rise of Lollero",
      author: 'Lollero Lolled',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/lollero.html',
    }

    await api
          .post('/api/blogs')
          .send(newBlogWithoutLikes)
          .expect(201)
          .expect('Content-Type', /application\/json/)

    const response = await api.get('/api/blogs')

    const content = response.body
                    .map(c => {
                      return { title: c.title, author: c.author, url: c.url, likes: c.likes }
                    })

    newBlogWithoutLikes.likes = 0
    expect(content).toContainEqual(newBlogWithoutLikes)
  })

  test('blogia is not saved without a title and an url and api returns 400', async () => {
    const newBlogWithoutTitleOrUrl =   {
      author: 'Lollero von Lollerson'
    }

    await api
          .post('/api/blogs')
          .send(newBlogWithoutTitleOrUrl)
          .expect(400)
  })
})

afterAll(() => {
  server.close()
})
