import React from 'react'
import styles from '../../home.module.css'
import NewMovieForm from '@/components/newMovieForm/NewMovieForm'


const newMoviePage = () => {
  return (
    <main className={styles.verticalContainer}>
      <h1 className={styles.movieTitle}> Add new movie </h1>
      <div className={styles.formContainer}>
      <NewMovieForm />

      </div>
    </main>
  )
}

export default newMoviePage
