import { getUserById } from '@/lib/api/userApi/userApi'
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
const CommentCard: FC<Props> = async ({ comment }) => {

    const { title, description, ratting, createdAt, userId } = comment

    const user: UserType = await getUserById(userId)
    console.log("user api: ",user)
    let userName: string = ""

    if (user && user.id === userId) {
         userName = user.name
    }  

    return (
        <article className='glass'>
            <section className='glass inlineCointainer'>
                <div>
                    <h4>{title}</h4>
                    <Rating name="half-rating-read" value={ratting} precision={0.5} readOnly />

                </div>
                <div className='rightText'>
                    {createdAt && <p> {formatDate(createdAt)} </p>}
                    <p> {userName}</p>
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