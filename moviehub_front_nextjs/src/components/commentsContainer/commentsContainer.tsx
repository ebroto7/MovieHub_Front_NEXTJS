import { MovieType } from '@/types/movie.interface'
import React, { FC } from 'react'

import CommentCard from './CommentCard'
import AddCommentButton from './AddCommentButton'
import { CommentType } from '@/types/comments.interface'
import { getCommentsByMovieId } from '@/lib/commentsApi'

type Props = {
    movie: number | string
}

const CommentsContainer: FC<Props> = async ({ movie }) => {

    const comments: CommentType[] = await getCommentsByMovieId(movie)
  
    return (
        <div className='verticalContainer'>
            <AddCommentButton />

            <ul>
                {comments && comments?.map((comment) => (
                    <li key={comment.id}>
                        <CommentCard comment={comment} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default CommentsContainer