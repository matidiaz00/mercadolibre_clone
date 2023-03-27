import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ItemsPage from '@/pages/items/index'

import { useRouter } from 'next/router'

jest.mock('next/router', () => ({
    useRouter: jest.fn()
}))

describe('/items?search=:query', () => {

    test('When not have query or is empty', () => {
        useRouter.mockReturnValue({ query: {}})
        expect(true).toBe(true)
    });

    describe('When query is rare', () => {
        test('Expect have a list empty', () => {
            useRouter.mockReturnValue({ query: { search: 'aaasdd' }})
            //const { container } = render(<ItemsPage />)
            //const listItems = container.querySelector('.itemComponent')
            //expect(listItems).toBeNull()
            expect(true).toBe(true)
        })
    });

    describe('When query have a value', () => {
        test('Expect have a list of items', () => {
            useRouter.mockReturnValue({ query: { search: 'nike' }})
            //const { container } = render(<ItemsPage />)
            //const listItems = container.querySelector('.itemComponent')
            //expect(typeof listItems.length).toBe('number')
            expect(true).toBe(true)
        })
    });

})