const axios = require('axios');

const baseAPIUrl = process.env.BASE_API_URL


export const getUserById = async (id: string | number) => {
    const movieUrl: string = `${baseAPIUrl}/user/${id}`
    try {
        const response = await fetch(movieUrl)
        const user = await response.json()
        if (response.status === 404) throw new Error("Request not found")
        if (response.status === 500) throw new Error("Server error")
        if (response.status !== 200) throw user
        return user
    } catch (error) {
        console.log(">>>ERROR", error)
        return error
    }
}



