
import MovieCard from '@/components/movieCard/MovieCard'
import React from 'react'

import styles from './home.module.css'
import GenreCollectionButtons from '@/components/genreCollectionButtons/GenreCollectionButtons'
import { getAllMoviesIds } from '@/lib/api/movieApi/movieApi'
import { MovieId } from '@/types/movie.interface'
import { notFound } from 'next/navigation'
import { GenreType } from '@/types/genre.interface'
import { getAllGenres } from '@/lib/genreApi'


const HomePage = async () => {

  const movieIds: MovieId[] = await getAllMoviesIds()
  const genres: GenreType[] = await getAllGenres()


  if (!movieIds) {
    notFound()
  }

  return (
    <>
      <main className={styles.main}>
        <aside className={styles.aside}>
          <GenreCollectionButtons genres={genres}/>

        </aside>
        <section className={styles.section}>
        <h1>Home</h1>

          {movieIds.map(({ id }, index) => (
            <MovieCard key={index} movieId={id} />
          ))}
        </section>
      </main>

    </>
  )
}
export default HomePage
