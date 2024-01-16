import './movieDetail.css'

import React, { FC } from 'react'
import Image from 'next/image'

import { MovieType } from '@/types/movie.interface'

import { GenreType } from '@/types/genre.interface';
import { getGenreById } from '@/lib/genreApi';
import Rating from '@mui/material/Rating';


type Props = {
    movie: MovieType
}

const MovieDetail: FC<Props> = async ({ movie }) => {
    const { title, description, genreId, director, stars, year, poster, duration, rated, userId } = movie

    const genre: GenreType = await getGenreById(genreId)


    return (
        <main>
          

            <article>
                <div className='inlineContainer glass'>
                    {poster && <Image
                        src={poster}
                        alt={title}
                        width={300}
                        height={400}
                    />
                    }
                    <section className='infoContainer glass'>
                        <div className='inlineContainer'>
                            {year && <h4>{year}  </h4>}
                            {duration && <h4>{duration} min </h4>}
                            {<h4>{114} min </h4>}
                        </div>
                        {genre.name && <h4>{genre.name} </h4>}
                        <Rating name="half-rating-read" value={Number(rated)} precision={0.5} readOnly />
                        {<div>
                            <h4>Director</h4>
                            {director ? <p>{director}</p> : <p>Not defined</p>}
                        </div>}
                        {<div>
                            <h4>Stars</h4>
                            {stars ? <p>{stars}</p> : <p>Not defined</p>}
                    </div>}
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
                <hr className="rounded" />
                <p className='glass' >{description}</p>
            </article>
        </main>
    )
}

export default MovieDetail