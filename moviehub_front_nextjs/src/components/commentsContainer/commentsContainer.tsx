'use client'
import React, { FC, useEffect, useState } from 'react'
import './comments.styles.css'

import CommentCard from './CommentCard'
import CreateCommentModal from './CreateCommentModal'

import { useCommentsContext } from '@/context/commentsContext'
import { MovieType } from '@/types/movie.interface'
import Loader from '../Loader/Loader'
import { error } from 'console'

type Props = {
    movie: MovieType
}

const CommentsContainer: FC<Props> = ({ movie }) => {

    const { commentsList, getCommentsByMovieId, isError } = useCommentsContext()

    const [isLoading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        const loadData = async () => {
            try {
                getCommentsByMovieId(movie.id)
            } catch (error) {
                console.log(">>>>", error);
            }
            setLoading(false);
        }
        loadData()

    }, [])


    return (
        <div className='verticalContainer'>
            <CreateCommentModal movie={movie.id} movieTitle={movie.title} />

            <ul className='commentsList'>
                {isLoading ?
                    <Loader />
                    : 
                        (isError)
                            ? <h2> download error</h2>
            :
                            commentsList && commentsList.toReversed().map((comment) => (
            <li key={comment.id}>
                <CommentCard comment={comment} />
            </li>
                    
                    
                    
                  
                    ))}
        </ul>
        </div >

    )
}
export default CommentsContainer

