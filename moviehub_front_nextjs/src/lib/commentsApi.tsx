'use server'
import { CommentType } from "@/types/comments.interface"

const baseAPIUrl = process.env.BASE_API_URL
const axios = require('axios');




export const getCommentsByMovieId = async (id: string | number) => {
  const url: string = `${baseAPIUrl}/comment/${id}`

  try {

    // const response = await axios.get(url)
    // const comments: CommentType[] = response.data
    // console.log(comments)

    // return comments

    return fetch(url)
      .then(Response => Response.json())
  } catch (error) {
    console.log(error)
  }

}


export const postNewComment = async (comment: CommentType) => {

  const { title, description, ratting, movieId, userId } = comment

  const url: string = `${baseAPIUrl}/comment/${userId}`
  const data = {
    title: title,
    description: description,
    ratting: ratting,
    movieId: movieId
  }

  console.log("postNewComment api call ", data)

  try {
    const response = await axios.post(url, data);
    if (response) {
      console.log("Comment uploaded successfully!", response.data);
    }
  } catch (error) {
    // if (axios.isAxiosError(error) && error.response) {
    if (axios.isAxiosError(error) && error) {
      console.error(
        "Failed to upload comment:",
        // error.response.data.message || "Unknown Error"
      );
    } else {
      console.error("Failed to upload comment:", error);
    }
  }

}

