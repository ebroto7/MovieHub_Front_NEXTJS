import './movieDetail.css'


import React, { FC } from 'react'
import Image from 'next/image'

import { MovieType } from '@/types/movie.interface'

import { FaStar } from "react-icons/fa6";
import { GenreType } from '@/types/genre.interface';
import { getGenreById } from '@/lib/genreApi';


type Props = {
    movie: MovieType
}


const MovieDetail: FC<Props> = async ({ movie }) => {
    const { title, description, genreId, director, stars, year, poster, duration, rated, userId } = movie

    const genre: GenreType = await getGenreById(genreId)


    return (
        <main>
            {/* {poster && <Image alt={title} src={poster} />}  */}
            <article>
                <div className='inlineContainer'>
                    {poster && <Image
                        src={poster}
                        alt={title}
                        width={150}
                        height={200}
                    />
                    }
                    <section className='infoContainer'>
                        {year && <h4>Year: {year} </h4>}
                        {genre.name && <h4>Genre: {genre.name} </h4>}
                        {rated && <h4>rated: {rated} <FaStar /></h4>}
                        {<div>
                            <h4>Director</h4>
                            <p>Denzel Washington</p>
                        </div>}
                        {<div>
                            <h4>Stars</h4>
                            <p>Denzel Washington, Charlize Theron</p>                        </div>}
                        {/* {director && <div>
                            <h4>Director</h4>
                            <p>{director}</p>
                        </div>}
                        {stars && <div>
                            <h4>Stars</h4>
                            <p>{stars}</p>
                        </div>} */}
                    </section>
                </div>
                <p>{description}</p>
            </article>
        </main>
    )
}

export default MovieDetail