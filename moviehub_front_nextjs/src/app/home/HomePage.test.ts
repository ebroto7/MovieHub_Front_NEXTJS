import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import HomePage from './page'
import MovieCard from '@/components/movieCard/MovieCard'


describe('home page shoud show template', () => {
    test('should show genre buttons', () => {
    //    render( <HomePage /> )
       expect(screen.getByText(HomePage, 'Home')).toBeDefined()

    })
    test('should show movie cards', () => {
    })

  
  
})
