'use client'
import { MovieType } from '@/types/movie.interface'
import './movieCard.css'

import React, { FC } from 'react'
import Image from 'next/image'

type Props = {
    movie: MovieType
}


// const MovieCard: FC<Props> = ({ movie }) => {
const MovieCard = () => {
    return (
        <>

            <div className="container">
                {/* <Image
      src="/profile.png"
      width={500}
      height={500}
      alt="Picture of the author"
    /> */}
                <Image
                     src="https://m.media-amazon.com/images/M/MV5BMTU3OTIyMTk0N15BMl5BanBnXkFtZTgwNDE4NDE2ODE@._V1_FMjpg_UY711_.jpg"
                    // src={movie.poster}
                    // alt={movie.title}
                    width={200}
                    height={200}
                    alt="Picture of the author"
                />
                <div className="content">
                    <h1>Doctor Strange (2016)</h1>
                    {/* {<h1>{`${movie.title} (${movie.year})`}</h1>} */}
                    <p>
                        Marvel's "Doctor Strange" follows the story of the talented neurosurgeon Doctor Stephen Strange who, after a tragic car accident, must put ego aside and learn the secrets of hidden world of mysticism and alternate dimensions.
                    </p>
                    {/* <p>{movie.description}</p> */}
                    <a href="https://www.imdb.com/title/tt1211837/?ref_=ttpl_pl_tt">Read More</a>
                    {/* navigation to movie detail page */}
                </div>
            </div>
        </>
    )
}

export default MovieCard