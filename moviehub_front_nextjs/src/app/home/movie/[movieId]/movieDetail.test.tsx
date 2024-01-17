import MovieDetailPage from './page'
import { MovieId, MovieType } from '@/types/movie.interface'
import { describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { getMovieById } from '@/lib/api/movieApi/movieApi'

const goodId= "20"
const badId= "202"

const movieIdMock: MovieId = {
    id: 20
}

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

// vi.mock("next/navigation", ()=> ({
//     useRouter() {
//         return {
//             prefetch: () => null
//         }
//     }
// }))


describe("movie detail test", () => {
    test("Should show movie info", async () => {
        render(<MovieDetailPage  params={{ movieId: goodId }} />)
        global.fetch = () =>
            Promise.resolve<any>({
                status: 200,
                json: () => Promise.resolve(movieMock)
            })

        const response = getMovieById(movieIdMock.id)
        // const movie = response.json()
        await expect(response).resolves.toBe(movieMock)
        console.log("response :",response)
        // // expect(response).toHaveLength(1)
        // expect(screen.getByText("User comments")).toBeDefined()
    })

    test("Should show error when movie not found", async () => {
        // render(<MovieDetailPage  params={ { movieId: badId }} />)

        global.fetch = () =>
            Promise.resolve<any>({
                status: 404,
                json: () => Promise.resolve()
            })

            const response = getMovieById(movieIdMock.id)
          await expect(response).resolves.toEqual(new Error("Request not found"))
            // expect(screen.getByText("Not Found")).toBeDefined()

    })
})

