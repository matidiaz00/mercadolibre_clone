import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ItemsPage from './index'

import { useRouter } from 'next/router'

jest.mock('next/router', () => ({
    useRouter: jest.fn()
}))

describe('/items?search=:query', () => {

    test('When not have query or is empty', () => {

        useRouter.mockReturnValue({ query: {}})
        

    });

    describe('When query is rare', () => {

        useRouter.mockReturnValue({ query: {}})
        render(<ItemsPage />)

        test('When query is empty', () => {
            
            expect(true).toBe(true)
        })

    });

})