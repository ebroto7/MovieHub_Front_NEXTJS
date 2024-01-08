'use client'
import { CommentType } from "@/types/comments.interface";
import { FC, PropsWithChildren, createContext, useContext, useState } from "react";

import axios from 'axios';

const baseAPIUrl = process.env.BASE_API_URL


type commentsContextProps = {
    commentsList: CommentType[],
    getCommentsByMovieId: (id: string | number) => void,
    postNewComment: (comment: CommentType ) => void,

    isError: boolean
}

export const commentsContext = createContext<commentsContextProps>({
    commentsList: [],
    getCommentsByMovieId:  () => { },
    postNewComment: () => {},

    isError: false
})

const CommentsProvider: FC<PropsWithChildren> = ({children}) => {

// const newComment: CommentType = {

//     movieId: 1,
//     title: 'goood movie',
//     description: 'I very Like',
//     ratting: 3.5,
//     userId: 7
// }

    const [commentsList, setCommentsList] = useState<CommentType[]>([])
    const [isError, setIsError] = useState<boolean>(false)

    const getCommentsByMovieId = async (id: string | number) => {
        const url: string = `${baseAPIUrl}/comment/${id}`

        console.log("url  ",url)


        try {
            const response = await axios.get(url)
            const comments: CommentType[] = response.data
            console.log("1-comments list  ",commentsList)

            if (commentsList !== comments) {
                setCommentsList([...comments])

                console.log("1-comments context  ",comments)
                console.log("2-comments list  ",commentsList)

            }

        } catch (error) {
            console.error("getCommentsByMovieId error",error)
            setIsError(true)
        }
    
    }

     const postNewComment = async (comment: CommentType ) => {

        const { title, description, ratting, movieId, userId } = comment
    
        const url: string = `${baseAPIUrl}/comment/${userId}`
        const data = {
            title: title, 
            description: description, 
            ratting: ratting,
            movieId: movieId
        }
    
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

    return (
        <commentsContext.Provider
            value={{ commentsList, getCommentsByMovieId, postNewComment, isError }}
        >
            {children}
        </commentsContext.Provider>
    )

}

function useCommentsContext() {
    const context = useContext(commentsContext);
    if (context === undefined || context === null) {
        throw new Error('Comments Context not implemented')
    }
    return context
}

export { CommentsProvider, useCommentsContext }
