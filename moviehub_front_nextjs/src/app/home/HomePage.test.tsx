import { describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import HomePage from './page'
import MovieCard from '@/components/movieCard/MovieCard'

vi.mock("next/navigation", ()=> ({
    useRouter() {
        return {
            prefetch: () => null
        }
    }
}))

describe('home page shoud show template', () => {
    test('should show title',  () => {
       render( <HomePage /> )


       expect(screen.getByText('Home')).toBeDefined()

    })

    test.todo('should show movie cards', () => {
    })

  
  
})
