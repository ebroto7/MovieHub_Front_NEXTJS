import { MovieType } from "@/types/movie.interface"
const axios = require('axios');

const baseAPIUrl = process.env.BASE_API_URL


export const getAllMoviesIds = async () => {
    const url: string = `${baseAPIUrl}/movie`
    try {
        const response = await fetch(url)
        const moviesId = await response.json()
        if (response.status === 404) throw new Error("Request not found")
        if (response.status === 500) throw new Error("Server error")
        if (response.status !== 200) throw moviesId
        return moviesId

    } catch (error) {
        console.log(">>>ERROR", error)
        return error
    }

}


export const getMovieById = async (id: string | number) => {
    const movieUrl: string = `${baseAPIUrl}/movie/${id}`
    try {
        const response = await fetch(movieUrl)
        const movie = await response.json()
        if (response.status === 404) throw new Error("Request not found")
        if (response.status === 500) throw new Error("Server error")
        if (response.status !== 200) throw movie
        return movie

        // return fetch(movieUrl)
        //     .then(Response => Response.json() )
    } catch (error) {
        console.log(">>>ERROR", error)
        return error
    }
}

export const getMoviesByGenre = async (id: string | number) => {
    const movieUrl: string = `${baseAPIUrl}/movie/genre/${id}`
    try {
        const response = await fetch(movieUrl)
        const movie = await response.json()
        if (response.status === 404) throw new Error("Request not found")
        if (response.status === 500) throw new Error("Server error")
        if (response.status !== 200) throw movie
        return movie


        
        // return fetch(movieUrl)
        //     .then(Response => Response.json())

    } catch (error) {
        console.log(">>>ERROR", error)
        return error    
    }
}

export const getMoviesByUserId = async (userId: string | number) => {
    const movieUrl: string = `${baseAPIUrl}/movie/user/${userId}`
    console.log("getMoviesByUserId url", movieUrl)
    try {
        const response = await fetch(movieUrl)
        const movies = await response.json()
        if (response.status === 404) throw new Error("Request not found")
        if (response.status === 500) throw new Error("Server error")
        if (response.status !== 200) throw movies
        return movies

    } catch (error) {
        console.log(">>>ERROR", error)
        return error    
    }
}






export const postNewMovie = async (movie: MovieType ) => {

    const { title, description, rated, genreId, year, duration, userId, director, stars, poster} = movie

    const url: string = `${baseAPIUrl}/movie/${userId}`
    console.log("create movie url", url)
 

    const newMovie: MovieType = {
        title: title,
        description: description,
        genreId: genreId,
        year: year,
        duration: duration,
        director: director,
        stars: stars,
        userId: 7,
        rated: rated,
        poster: poster
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