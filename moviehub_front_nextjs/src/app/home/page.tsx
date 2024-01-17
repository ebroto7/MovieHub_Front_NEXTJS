
import MovieCard from '@/components/movieCard/MovieCard'
import React from 'react'

import styles from './home.module.css'
import GenreCollectionButtons from '@/components/genreCollectionButtons/GenreCollectionButtons'
import { getAllMoviesIds } from '@/lib/api/movieApi/movieApi'
import { MovieId } from '@/types/movie.interface'
import { notFound } from 'next/navigation'


const HomePage = async () => {

  const movieIds: MovieId[] = await getAllMoviesIds()

  if (!movieIds) {
    notFound()
  }

  return (
    <>
      <main className={styles.main}>
        <aside className={styles.aside}>SideBar
          <GenreCollectionButtons />

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
