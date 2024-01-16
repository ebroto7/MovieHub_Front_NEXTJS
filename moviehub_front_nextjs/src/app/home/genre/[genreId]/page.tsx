import { getMoviesByGenre } from "@/lib/api/movieApi/movieApi"

import styles from '../../home.module.css'
import MovieCard from "@/components/movieCard/MovieCard"
import { GenreType } from "@/types/genre.interface"
import { notFound } from 'next/navigation'
import { MovieType } from "@/types/movie.interface"
import { getGenreById } from "@/lib/genreApi"


const GenreDetail = async ({ params }: { params: { genreId: string } }) => {
  const { genreId } = params
  const genre: GenreType = await getGenreById(genreId)
  const movies: MovieType[] = await getMoviesByGenre(genreId)

  if (!movies) {
    notFound()
  }

  return (
    <main className={styles.section}>
      <h3 className={styles.genreTitle}>{genre.name} Movies</h3>

    
      {movies
        ? < section className={styles.section}>
            {movies.map((movie, index) => (
              <MovieCard key={index} movieId={movie.id!} />
            ))}

          </section >
        : <h3>There are still no movies for the {`< ${genre.name} >`} genre</h3>

      }
    </main>

  )
}

export default GenreDetail


