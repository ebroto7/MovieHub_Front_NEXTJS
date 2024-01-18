import { describe, expect, test } from 'vitest'

import { MovieId, MovieType } from '@/types/movie.interface'
import { getAllMoviesIds, getMovieById, getMoviesByGenre } from './movieApi'

const movieMock: MovieType = {
    title: "movie title",
    description: "This is a movie description",
    genreId: 2
}

const movieIdsArrayMOCK: MovieId[] = [
    {
        id: 1
    },
    {
        id: 2
    },
    {
        id: 3
    }
]


describe("tests for => getAllMoviesIds <=  api call", () => {
    test("should return correct data", () => {
        global.fetch = () =>
            Promise.resolve({
                status: 200,
                json: () => Promise.resolve(movieIdsArrayMOCK)
            })

        const response = getAllMoviesIds()
        expect(response).resolves.toEqual(movieIdsArrayMOCK)
    })

    test("should call error 400", () => {

        global.fetch = () =>
            Promise.resolve<any>({
                status: 404,
                json: () => Promise.resolve()
            })

        const response = getAllMoviesIds()
        expect(response).resolves.toEqual(new Error("Request not found"))
    })

    test("should call server error", () => {
        global.fetch = () =>
        Promise.resolve({
            status: 500,
            json: () => Promise.resolve()
        })

        const response = getAllMoviesIds()
        expect(response).resolves.toEqual(new Error("Server error"))
    })
})

describe("tests for => getMovieById <= api call", () => {
    test("should return correct data", () => {
        global.fetch = () =>
            Promise.resolve({
                status: 200,
                json: () => Promise.resolve(movieMock)
            })

        const response = getMovieById(movieIdsArrayMOCK[0].id)
        expect(response).resolves.toEqual(movieMock)
    })

    test("should call error 400", () => {

        global.fetch = () =>
            Promise.resolve<any>({
                status: 404,
                json: () => Promise.resolve()
            })

        const response = getMovieById(movieIdsArrayMOCK[0].id)
        expect(response).resolves.toEqual(new Error("Request not found"))
    })

    test("should call server error", () => {
        global.fetch = () =>
        Promise.resolve({
            status: 500,
            json: () => Promise.resolve()
        })

        const response = getMovieById("1")
        expect(response).resolves.toEqual(new Error("Server error"))
    })
})

describe("tests for => getMoviesByGenre <= api call", () => {
    test("should return correct data", () => {
        global.fetch = () =>
            Promise.resolve({
                status: 200,
                json: () => Promise.resolve(movieMock)
            })

        const response = getMoviesByGenre("1")
        expect(response).resolves.toEqual(movieMock)
    })

    test("should call error 400", () => {

        global.fetch = () =>
            Promise.resolve<any>({
                status: 404,
                json: () => Promise.resolve()
            })

        const response = getMoviesByGenre("1")
        expect(response).resolves.toEqual(new Error("Request not found"))
    })

    test("should call server error", () => {
        global.fetch = () =>
        Promise.resolve({
            status: 500,
            json: () => Promise.resolve()
        })

        const response = getMoviesByGenre("1")
        expect(response).resolves.toEqual(new Error("Server error"))
    })
})


describe("tests for => postNewMovie <= api call", () => {
    test("should send correct data", () => {
        global.fetch = () =>
            Promise.resolve({
                status: 200,
                json: () => Promise.resolve(movieMock)
            })

        const response = getMoviesByGenre("1")
        expect(response).resolves.toEqual(movieMock)
    })

    test("should call error 400", () => {

        global.fetch = () =>
            Promise.resolve<any>({
                status: 404,
                json: () => Promise.resolve()
            })

        const response = getMoviesByGenre("1")
        expect(response).resolves.toEqual(new Error("Request not found"))
    })

    test("should call server error", () => {
        global.fetch = () =>
        Promise.resolve({
            status: 500,
            json: () => Promise.resolve()
        })

        const response = getMoviesByGenre("1")
        expect(response).resolves.toEqual(new Error("Server error"))
    })
})
