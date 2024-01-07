import React, { FC } from 'react'
import './comments.styles.css'

import CommentCard from './CommentCard'
import { CommentType } from '@/types/comments.interface'
import { getCommentsByMovieId } from '@/lib/commentsApi'
import CreateCommentModal from './CreateCommentModal'


type Props = {
    movie: number | string
}



const CommentsContainer: FC<Props> = async ({ movie }) => {

    const comments: CommentType[] = await getCommentsByMovieId(movie)
  
    return (
        <div className='verticalContainer'>
            <CreateCommentModal movie={movie} />

            <ul className='commentsList'>
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