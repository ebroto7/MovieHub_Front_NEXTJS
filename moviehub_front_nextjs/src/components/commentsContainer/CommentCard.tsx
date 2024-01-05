import './comments.styles.css'
import { CommentType } from '@/types/comments.interface'
import { Rating } from '@mui/material'
import React, { FC } from 'react'

type Props = {
    comment: string
}


const newComment: CommentType = {
    id: 1,
    movieID: 2,
    title: 'Not bad',
    description: 'this movie can be better',
    ratting: 3.5,
    createdAt: new Date(),
    userId: 1
}

const CommentCard: FC<Props> = ({ comment }) => {

    // const { title, description, ratting, createdAt, userId } = comment
    const { title, description, ratting, createdAt, userId } = newComment
    return (
        <article className='glass'>
            <section className='glass inlineCointainer'>
                <div>
                    user: {userId}
                    <h4>title: {title}</h4>
                </div>
                <div>
                    <Rating name="half-rating-read" value={3.5} precision={0.5} readOnly />
                    {createdAt && <p>createdAt: {createdAt.toDateString()}</p>}
                </div>
                
            </section>
            <section className='glass'>

                    <p>description: {description}</p>
                </section>

        </article>
    )
}

export default CommentCard