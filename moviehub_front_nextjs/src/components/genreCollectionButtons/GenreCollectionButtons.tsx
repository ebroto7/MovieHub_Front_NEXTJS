import './genreMenuButton.css'

import { GenreType } from '@/types/genre.interface'
import Link from 'next/link'
import { FaChevronRight } from "react-icons/fa";

import { FC } from 'react';

type props = {
    genres: GenreType[]
}


const GenreCollectionButtons: FC<props> = ({ genres }) => {
    // const GenreCollectionButtons = () => {

    // const genres: GenreType[] = []
    return (
        <>
            <h2>Genres</h2>
            {(genres != null && genres.length > 0)
                ? <ul style={{ display: 'flex', flexDirection: 'column' }}>
                    {genres.map(({ id, name }) => (
                        <li key={id} className='btn'>
                            <span className='circle'>
                                <i className='chevron'><FaChevronRight /></i>
                            </span>
                            <Link key={id} href={`home/genre/${id}`} className='text'>{name}</Link>
                        </li>
                    ))}
                </ul>
                : <p>No genres have been downloaded</p>
            }

        </>
    )
}

export default GenreCollectionButtons