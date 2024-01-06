const baseAPIUrl = process.env.BASE_API_URL



export const getUserById = async (id: string | number) => {
    const movieUrl: string = `${baseAPIUrl}/user/${id}`
    try {
        return fetch(movieUrl)
            .then(Response => Response.json() )
    } catch (error) {
        console.log(error)
    }
}