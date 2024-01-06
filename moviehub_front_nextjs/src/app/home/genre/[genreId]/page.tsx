import { getMoviesByGenre } from "@/lib/movieApi"

import styles from '../../home.module.css'
import MovieCard from "@/components/movieCard/MovieCard"
import { GenreType } from "@/types/genre.interface"

const GenreDetail = async ({ params }: { params: { genreId: string } }) => {



  const { genreId } = params
  const genre: GenreType = await getMoviesByGenre(genreId)

  return (
    <main className={styles.section}>
      <h3 className={styles.genreTitle}>{genre.name} Movies</h3>
    
      {genre.movies
        ? < section className={styles.section}>
            {genre.movies.map((movie, index) => (
              <MovieCard key={index} movieId={movie.id!} />
            ))}

          </section >
        : <h3>There are still no movies for the {`< ${genre.name} >`} genre</h3>

      }
    </main>

  )
}

export default GenreDetail


