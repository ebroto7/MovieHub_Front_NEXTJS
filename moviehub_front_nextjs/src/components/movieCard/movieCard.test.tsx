import { afterEach, beforeEach, describe, expect, test } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import MovieCard from './MovieCard'
import { MovieType } from '@/types/movie.interface'

const movieMock: MovieType = {

    id: 20,
    title: 'The Dark Knight Returns - Part 1 (Batman: The Dark Knight Returns, Part 1)',
    description: 'Batman has not been seen for ten years. A new breed of criminal ravages Gotham City, forcing 55-year-old Bruce Wayne back into the cape and cowl. But, does he still have what it takes to fight crime in a new era?',
    year: '2012',
    director: 'Jay Oliva',
    stars: 'Peter Weller, Ariel Winter, David Selby',
    duration: '76',
    rated: '4',
    // poster: null,
    genreId: 1,
    userId: 7,
    // createdAt: '2024-01-16T11:28:30.205Z',
    // updatedAt: '2024-01-16T11:28:30.205Z',
    Genre: {
        id: 1,
        name: 'Action',
        //   createdAt: '2023-12-02T18:23:32.120Z',
        //   updatedAt: '2023-12-02T18:23:32.120Z'
    },
    comments: []

}

describe('movie card testing', async () => {

    // beforeEach(() => { })
    // afterEach(cleanup)

    test('should not show info', () => {

        render(     < MovieCard movieId={"20"} />   )
        global.fetch = () =>
        Promise.resolve<any>({
            status: 200,
            json: () => Promise.resolve(movieMock)
        })

        // expect(1+1).toBe(2)
        expect(screen.getByText(movieMock.title)).toBeDefined()
    })

    test.todo('should show info & Button on hover', () => {
        // expect(1+1).toBe(2)
        // fireEvent.mouseEnter(<Link/>),
        expect(1 + 1).toBe(2)

        expect(screen.findByRole("a")).toBeDefined()

    })


})

