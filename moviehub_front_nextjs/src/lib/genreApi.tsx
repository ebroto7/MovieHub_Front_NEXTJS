
const baseAPIUrl = process.env.BASE_API_URL


export const getAllGenres = async () => {

    const genresUrl: string = `${baseAPIUrl}/genre`
    try {
        return fetch(genresUrl)
            .then(Response => Response.json())
    } catch (error) {
        console.log(error)
    }


}


export const getGenreById = async (id: string | number) => {

    const genresUrl: string = `${baseAPIUrl}/genre/${id}`
    try {
        return fetch(genresUrl)
            .then(Response => Response.json())
    } catch (error) {
        console.log(error)
    }


}