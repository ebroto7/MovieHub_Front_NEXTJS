
import { MovieType } from '@/types/movie.interface'
import { getMovieById } from '@/lib/movieApi'

const MovieDetail = async ({ params }: { params: { movieId: string } })  => {

   const { movieId } = params
   const movie: MovieType = await getMovieById(movieId)
   
   console.log("movidetail id: ", movieId)
   console.log("movidetail: ", movie)
 
   return (
    <>
       <h1> {movie.title} ={'>'} detail page</h1>
    </>
 
    )
  }
  
export default MovieDetail


