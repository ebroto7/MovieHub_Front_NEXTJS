import GenreCollectionButtons from '@/components/genreCollectionButtons/GenreCollectionButtons'
import MovieCard from '@/components/movieCard/MovieCard'
import React from 'react'


const HomePage = () => {
  return (
    <>
      <h1 className='homeButton' >Home</h1>
      <GenreCollectionButtons />
      <MovieCard />
    </>
  )
}

export default HomePage
