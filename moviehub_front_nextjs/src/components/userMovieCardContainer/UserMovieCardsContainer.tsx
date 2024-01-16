import React, { FC } from 'react'
import { MovieType } from '@/types/movie.interface'
import { getMoviesByUserId } from '@/lib/api/movieApi/movieApi'
import styles from '../../app/home/home.module.css'
import MovieCard from '../movieCard/MovieCard'

type Props = {
    userId: number | string
}

const UserMovieCardsContainer: FC<Props> = async ({ userId }) => {

    const movies: MovieType[] = await getMoviesByUserId(userId)
    console.log("user movie cards container movies:", movies)

    return (

        <section className={styles.section}>
            {
            
            (movies.length > 0) 
            ? movies.map(({ id }, index) => (
                id && <MovieCard key={index} movieId={id} />
            ))
                : <h3>no movies uploaded</h3>
        }
        </section>


    )
}

export default UserMovieCardsContainer