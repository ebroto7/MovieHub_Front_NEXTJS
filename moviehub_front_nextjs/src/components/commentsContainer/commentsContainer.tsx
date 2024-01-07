'use client'
import React, { FC, useEffect, useState } from 'react'
import './comments.styles.css'

import CommentCard from './CommentCard'
import { CommentType } from '@/types/comments.interface'
import { getCommentsByMovieId } from '@/lib/commentsApi'
import CreateCommentModal from './CreateCommentModal'

import { useCommentsContext } from '@/context/commentsContext'
import { MovieType } from '@/types/movie.interface'



type Props = {
    movie: MovieType
}



// const CommentsContainer: FC<Props> = async ({ movie }) => {
const CommentsContainer: FC<Props> = ({ movie }) => {

    const { commentsList, getCommentsByMovieId } = useCommentsContext()

    // const comments: CommentType[] = await getCommentsByMovieId(movie)
    const [isLoading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        console.log("ha hecho useeffect");
        setLoading(true);
        const loadData = async () => {
            console.log("ha hecho load data");

            try {
                getCommentsByMovieId(movie.id)
                console.log("ha hecho fetch");
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
        loadData()


        console.log("comments list on container ", commentsList)
    }, [commentsList])


    // useEffect(() => {
    //     const loadData = async () => {
    //       try {
    //         await getMySongs(user);
    //       } catch (error) {
    //         console.log(error);
    //       }
    //       setLoading(false);
    //     };
    //     loadData();
    //   }, [isModifiedSong]);


    return (
        <div className='verticalContainer'>
            <CreateCommentModal movie={movie.id} movieTitle={movie.title}/>

            <ul className='commentsList'>
                {isLoading ? 
                    <h2>Loading...</h2>
                : commentsList && commentsList.toReversed().map((comment) => (
                    <li key={comment.id}>
                        <CommentCard comment={comment} />
                    </li>
                ))}
            </ul>
        </div>

    )
}
export default CommentsContainer

