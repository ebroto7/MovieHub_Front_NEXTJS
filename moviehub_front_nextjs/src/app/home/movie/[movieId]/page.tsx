
import { MovieType } from '@/types/movie.interface'
import { getMovieById } from '@/lib/movieApi'

import styles from '../../home.module.css'
import MovieDetail from '@/components/movieDetail/MovieDetail'

const MovieDetailPage = async ({ params }: { params: { movieId: string } }) => {

   const { movieId } = params
   const movie: MovieType = await getMovieById(movieId)

   console.log("movidetail id: ", movieId)
   console.log("movidetail: ", movie)

   return (
      <main className={styles.verticalContainer}>
         <h1 className={styles.glass}> {movie.title} ={'>'} detail page</h1>
         <div className={styles.inlineCointainer}>
            <article className={`${styles.main}, ${styles.glass}`}>
               <MovieDetail movie={movie} />
            </article >
            <section className={`${styles.main}, ${styles.glass}`}>
               Movie coments
            </section>
         </div>
      </main>

   )
}

export default MovieDetailPage


