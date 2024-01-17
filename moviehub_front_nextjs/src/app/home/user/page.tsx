'use client'
import styles from '../home.module.css'
import '../../../components/commentsContainer/comments.styles.css'
import Link from 'next/link';
import { notFound } from 'next/navigation'

import { FaArrowRight } from 'react-icons/fa';

import { useUserContext } from '@/context/userContext';
import { useEffect, useState } from 'react';
import { UserType } from '@/types/user.interface';
import UserMovieCardsContainer from '@/components/userMovieCardContainer/UserMovieCardsContainer';


const UserPage = () => {

  const { userLogged } = useUserContext()
  if (!userLogged) notFound()

  return (
    <>
      <main className={styles.verticalContainer}>
        <h1 className={styles.movieTitle}> {userLogged?.name} page </h1>
        <Link href={'user/newMovie'}>
          <button className='addCommentButton'  >
            <FaArrowRight className="icon" />
            <p className="text"> CreateMovie </p>
          </button>
        </Link>

        {/* // user movies component */}
        {userLogged && <UserMovieCardsContainer userId={userLogged.id}/>}

      </main>
    </>

  )
}

export default UserPage
