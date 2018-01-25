import React from 'react'
import { shallow, mount } from 'enzyme'
import App from '../App'
jest.mock('../../services/blogs')

describe('<App />', () => {
    describe('when user is not logged in', () => {
        it ('doesn\'t show blogs but login form', () => {
            const appComponent = shallow(<App />)

            expect(appComponent.find('.content').exists()).toEqual(false)
            expect(appComponent.find('.login-form').exists()).toEqual(true)
        })
    })

    describe('when user is logged in', () => {
        let appComponent
        beforeEach(() => {
            window.localStorage.setItem('user', 'a valid token')
            appComponent = mount(<App />)
        })

        it ('shows blogs but not login form', () => {
            appComponent.update()
            expect(appComponent.find('.content').exists()).toEqual(true)
            expect(appComponent.find('.login-form').exists()).toEqual(false)
            expect(appComponent.find('.blogs').exists()).toEqual(true)
            expect(appComponent.find('.blog-title').exists()).toEqual(true)
            expect(appComponent.find('.blog-author').exists()).toEqual(true)
        })
    })
})
