'use client'
import { useState } from 'react'
import { GenreType } from '@/types/genre.interface'

type Props = {}

const genreList: GenreType[] = [
    {
        id: 1,
        name: 'Sci-Fi',
    },
    {
        id: 2,
        name: 'Thriller',
    },
    {
        id: 3,
        name: 'Drama',
    }
]

const GenreCollectionButtons = (props: Props) => {

    const [genres, setGenres] = useState<GenreType[]>(genreList)

    return (
        <>
            <h2>genres</h2>
            {genres
                ? genres.map((genre) => (
                    <h3 key={genre.id} >{genre.name}</h3>
                ))
                : <p>not genres downloaded</p>
            }
        </>
    )
}

export default GenreCollectionButtons