import { MovieType } from '@/types/movie.interface'
import React, { FC } from 'react'

import CommentCard from './CommentCard'

type Props = {
    movie: MovieType
}

const CommentsContainer: FC<Props> = ({ movie }) => {
    const { comments } = movie

    return (
        <>
            <CommentCard comment={"hello"}/>


            {comments && comments?.map((comment) => (
                <CommentCard comment={comment}/>
            ))}



        </>

    )
}
export default CommentsContainer