const baseAPIUrl = process.env.BASE_API_URL


export const getCommentsByMovieId = async (id: string | number) => {
    const url: string = `${baseAPIUrl}/comment/${id}`

    try {
        return fetch(url)
            .then(Response => Response.json())
    } catch (error) {
        console.log(error)
    }

}
