'use client'
import { CommentType } from "@/types/comments.interface";
import { FC, PropsWithChildren, createContext, useContext, useState } from "react";

const axios = require('axios');

const baseAPIUrl = process.env.BASE_API_URL


type commentsContextProps = {
    commentsList: CommentType[],
    getCommentsByMovieId: (id: string | number) => void,
    postNewComment: (comment: CommentType) => void,

    isError: boolean
}

export const commentsContext = createContext<commentsContextProps>({
    commentsList: [],
    getCommentsByMovieId: () => { },
    postNewComment: () => { },

    isError: false
})

const CommentsProvider: FC<PropsWithChildren> = ({ children }) => {


    const [commentsList, setCommentsList] = useState<CommentType[]>([])
    const [isError, setIsError] = useState<boolean>(false)

    const getCommentsByMovieId = async (id: string | number) => {
        const url: string = `${baseAPIUrl}/comment/${id}`

        try {
            const response = await axios.get(url)
            const comments: CommentType[] = response.data

            if (commentsList !== comments) {
                setCommentsList([...comments])
            }

        } catch (error) {
            console.error("getCommentsByMovieId error", error)
            setIsError(true)
        }

    }

    const postNewComment = async (comment: CommentType) => {

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
