
import { MovieType } from '@/types/movie.interface'
import { getMovieById } from '@/lib/movieApi'

import styles from '../../home.module.css'
import MovieDetail from '@/components/movieDetail/MovieDetail'
import CommentsContainer from '@/components/commentsContainer/commentsContainer'

const MovieDetailPage = async ({ params }: { params: { movieId: string } }) => {

   const { movieId } = params
   const movie: MovieType = await getMovieById(movieId)

   return (
      <main className={styles.verticalContainer}>
         <h1 className={styles.movieTitle}> {movie.title} </h1>
         <div className={styles.inlineCointainer}>
            <article className={`${styles.articleContainer}, ${styles.glass}`}>
               <MovieDetail movie={movie} />
            </article >
            <article className={`${styles.articleContainer}, ${styles.glass}`}>
               Movie coments
               <CommentsContainer movie={movie}/>
            </article>
         </div>
      </main>
   )
}

export default MovieDetailPage


