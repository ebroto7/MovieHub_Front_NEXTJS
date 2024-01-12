import { getUserById } from '@/lib/userApi'
import './comments.styles.css'
import { CommentType } from '@/types/comments.interface'
import { UserType } from '@/types/user.interface'
import { Rating } from '@mui/material'
import React, { FC } from 'react'
import { formatDate } from '@/lib/utils/utils'


type Props = {
    comment: CommentType
}


// const CommentCard: FC<Props> = async ({ comment }) => {
const CommentCard: FC<Props> =  ({ comment }) => {

    const { title, description, ratting, createdAt, userId } = comment

    // const user: UserType = await getUserById(userId)

    return (
        <article className='glass'>
            <section className='glass inlineCointainer'>
                <div>
                    <h4>{title}</h4>
                    <Rating name="half-rating-read" value={ratting} precision={0.5} readOnly />

                </div>
                <div className='rightText'>
                    {createdAt && <p> {formatDate(createdAt)} </p>}
                    {/* {user && <p> {user.name}</p>} */}
                </div>

            </section>
            <section className='glass'>
                Comment:
                <p>{description}</p>
            </section>

        </article>

    )
}

export default CommentCard