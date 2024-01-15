import { MovieType } from "@/types/movie.interface"
const axios = require('axios');

const baseAPIUrl = process.env.BASE_API_URL


export const getAllMoviesIds = async () => {
    const url: string = `${baseAPIUrl}/movie`
    try {
        return fetch(url)
            .then(Response => Response.json())
    } catch (error) {
        console.log(error)
    }

}


export const getMovieById = async (id: string | number) => {
    const movieUrl: string = `${baseAPIUrl}/movie/${id}`
    try {
        return fetch(movieUrl)
            .then(Response => Response.json() )
    } catch (error) {
        console.log(error)
    }
}

export const getMoviesByGenre = async (id: string | number) => {
    const movieUrl: string = `${baseAPIUrl}/genre/${id}`
    try {
        return fetch(movieUrl)
            .then(Response => Response.json())

    } catch (error) {
        console.log(error)
    }
}

export const postNewMovie = async (movie: MovieType ) => {

    const { title, description, rated, genreId, year, duration, userId, director, stars, poster} = movie

    const url: string = `${baseAPIUrl}/movie/${userId}`
    console.log("create movie url", url)
 

    const newMovie: MovieType = {
        title: title,
        description: description,
        genreId: 7,
        year: year,
        // duration: duration,
        // director: director,
        // stars: stars,
        // userId: 7,
        rated: rated,
        // poster: poster
    }

    try {
        const response = await axios.post(url, newMovie);
        if (response) {
          console.log("Movie uploaded successfully!", response.data);
        }
      } catch (error) {
        // if (axios.isAxiosError(error) && error.response) {
        //   console.error(
        //     "Failed to upload comment:",
        //     error.response.data.message || "Unknown Error"
        //   );
        // } else {
          console.error("Failed to upload comment:", error);
        // }
      }

}