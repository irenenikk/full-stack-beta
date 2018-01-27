import React from 'react'
import { shallow } from 'enzyme'
import ModestBlog from '../Blogs/ModestBlog'
import FancyBlog from '../Blogs/FancyBlog'
import Blog from '../Blogs/Blog'

describe('<Blog />', () => {
  it ('renders content', () => {
    const blog = {
      title: 'The secret life of lollero96',
      author: 'Lollero96',
    }
    const blogComponent = shallow(<ModestBlog blog={blog} />)
    const titleSpan = blogComponent.find('.blog-title')
    const authorDiv = blogComponent.find('.blog-author')

    expect(titleSpan.text()).toContain(blog.title)
    expect(authorDiv.text()).toContain(blog.author)
  })

  it ('pressing the like-button twice will increase the likes of the blog by 2', () => {
    const blog = {
      title: 'Walking the line: what it means to be a lollero',
      author: 'Lollero96',
      likes: 0
    }
    const mockHandler = jest.fn()
    const blogComponent = shallow(<FancyBlog blog={blog} onLike={mockHandler} />)
    const button = blogComponent.find('.blog-like-button')
    button.simulate('click', { preventDefault() {} })
    button.simulate('click', { preventDefault() {} })

    expect(mockHandler.mock.calls.length).toBe(2)
  })
})
