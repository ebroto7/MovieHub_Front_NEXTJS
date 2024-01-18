import { describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import GenreCollectionButtons from './GenreCollectionButtons'
import { GenreType } from '@/types/genre.interface'

const genresMock: GenreType[] = [
    {
        id: 1,
        name: "Thriller"
    },
    {
        id: 2,
        name: "Drama"
    },
    {
        id: 3,
        name: "Sci-fy"
    },

]

describe("genre collection buttons test", () => {
    test("Should show empty state", () => {
        render(<GenreCollectionButtons genres={[]}/>)

        expect(screen.getByText("Genres")).toBeDefined()
        expect(screen.getByText("No genres have been downloaded")).toBeDefined()
        expect(screen.queryByText(genresMock[0].name)).toBeNull()

    })

    test("Should show buttons with text", () => {
        render(<GenreCollectionButtons genres={genresMock}/>)

        genresMock.map((genre) => {
            expect(screen.getByText(genre.name)).toBeDefined()
        })


    })
})