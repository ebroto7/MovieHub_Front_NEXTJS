import './genreMenuButton.css'


import { GenreType } from '@/types/genre.interface'
import Link from 'next/link'
import { FaChevronRight } from "react-icons/fa";


import { getAllGenres } from '@/lib/genreApi'



const GenreCollectionButtons = async () => {

    const genres: GenreType[] = await getAllGenres()

    return (
        <>
            <h2>genres</h2>
            <ul style={{ display: 'flex', flexDirection: 'column' }}>
                {genres
                    ? genres.map(({ id, name }) => (
                        
                        <li key={id} className='btn'>
                            <span className='circle'>
                                <i className='chevron'><FaChevronRight /></i>
                            </span>
                            <Link key={id} href={`home/genre/${id}`} className='text'>{name}</Link>
                        </li>
                    ))
                    : <p>not genres downloaded</p>
                }
            </ul>

        </>
    )
}

export default GenreCollectionButtons