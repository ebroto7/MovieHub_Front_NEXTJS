import { CommentType } from "@/types/comments.interface";
import { FC, PropsWithChildren, createContext, useContext, useState } from "react";

import axios from 'axios';

const baseAPIUrl = process.env.BASE_API_URL


type commentsContextProps = {
    commentsList: CommentType[],
    getCommentsByMovieId: (id: string | number) => void,
    postNewComment: (comment: CommentType ) => void

}

export const commentsContext = createContext<commentsContextProps>({
    commentsList: [],
    getCommentsByMovieId:  () => { },
    postNewComment: () => {}

})

const CommentsProvider: FC<PropsWithChildren> = ({children}) => {

const newComment: CommentType = {

    movieId: 1,
    title: 'goood movie',
    description: 'I very Like',
    ratting: 3.5,
    userId: 7
}

    const [commentsList, setCommentsList] = useState<CommentType[]>([])

    const getCommentsByMovieId = async (id: string | number) => {
        const url: string = `${baseAPIUrl}/comment/${id}`
        console.log("comments context getCommentsByMovieId >>>> START with id:",id)

        try {
            const response = await axios.get(url)
            const comments: CommentType[] = response.data
            console.log("comments context getCommentsByMovieId ",comments)
            
            setCommentsList(comments)

        } catch (error) {
            console.log("comments context getCommentsByMovieId >>>>>>> ERROR")
            console.error(error)
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

    return (
        <commentsContext.Provider
            value={{ commentsList, getCommentsByMovieId, postNewComment }}
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
