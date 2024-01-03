
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

