'use client'
import React, { useEffect, useState } from 'react'
import styles from '../../app/home/home.module.css'
import { Box, Button, Rating, TextField } from '@mui/material'

import { IoIosSend } from "react-icons/io";
import { MovieType } from '@/types/movie.interface';
import { postNewMovie } from '@/lib/movieApi';


type Props = {}

const NewMovieForm = (props: Props) => {

    const [title, setTitle] = useState<string>("")
    const [isValidTitle, setIsValidTitle] = useState<boolean>(false)
    const [isValidTitleMessage, setIsValidTitleMessage] = useState<string>("")

    const [description, setDescription] = useState<string>("")
    const [isValidDescription, setIsValidDescription] = useState<boolean>(false)
    const [isValidDescriptionMessage, setIsValidDescriptionMessage] = useState<string>("")

    const [genre, setGenre] = useState<number | string>(0)
    // validate genre

    const [year, setYear] = useState<number>(0)
    const [isValidYear, setIsValidYear] = useState<boolean>(false)
    const [isValidYearMessage, setIsValidYearMessage] = useState<string>("")

    const [duration, setDuration] = useState<number>(0)
    const [isValidDuration, setIsValidDuration] = useState<boolean>(false)
    const [isValidDurationMessage, setIsValidDurationMessage] = useState<string>("")


    const [director, setDirector] = useState<string>("")
    const [stars, setStars] = useState<string>("")
    const [rating, setRating] = useState<number>(0)


    const [isValidForm, setIsValidForm] = useState<boolean>(false)

    useEffect(() => {
        validateForm()
    }, [title, description, year, duration])

    const HandleSubmit = (ev: React.FormEvent) => {
        ev.preventDefault()
        validateForm()

        if (isValidForm) {
            const newMovie: MovieType = {
                title: title,
                description: description,
                genreId: genre,
                year: year,
                duration: duration,
                director: director,
                stars: [stars],
                userId: 7,
                rated: rating,
                // poster: poster
            }

            console.log("movie form: ", newMovie)
            // createMovie(newMovie)
            postNewMovie(newMovie)
        }

    }

    const validateForm = () => {

        let validate = true

        if (title.length < 3) {
            setIsValidTitleMessage("The title must be more than 3 characters.")
            setIsValidTitle(false)
            validate = false
        } else {
            setIsValidTitle(true)
        }

        if (description.length < 3) {
            setIsValidDescriptionMessage("The description must be more than 3 characters.")
            setIsValidDescription(false)
            validate = false
        } else {
            setIsValidDescription(true)
        }

        if (year < 1900 || year > 2025) {
            setIsValidYearMessage("The year of the film must be between 1900 and the current date.")
            setIsValidYear(false)
            validate = false

        } else {
            setIsValidYear(true)
        }

        if (duration < 1) {
            setIsValidDurationMessage("You must indicate a duration greater than 1min.")
            setIsValidDuration(false)
            validate = false

        } else {
            setIsValidDuration(true)
        }
        console.log("validate form function ", validate)

        setIsValidForm(validate)
    }

    return (
        <article className={styles.glass}>
            <form onSubmit={HandleSubmit}>
                <Box
                    component="div"
                    sx={{
                        '& > :not(style)': { m: 1, width: '45%' },
                    }}

                >
                    <TextField id="movie-title" label="Movie title" variant="standard" required
                        onChange={ev => setTitle(ev.target.value)}
                    />
                    {!isValidTitle && <h6 className={styles.errorMessage}>{isValidTitleMessage}</h6>}


                    {/* <TextField
                    id="outlined-select-currency"
                    select
                    label="Genre"
                    defaultValue={1}
                    value={1}

                    onChange={ev => setGenre(ev.target.value)}

                    required
                >
                    {genreItems().map((genre) => (
                        <MenuItem key={genre.value} value={genre.value}>
                            {genre.label}
                        </MenuItem>
                    ))}
                </TextField> */}
                    <br />
                    <TextField id="year" label="year" variant="standard" type="number" required
                        onChange={ev => setYear(Number(ev.target.value))}
                    />
                    {!isValidYear && <h6 className={styles.errorMessage}>{isValidYearMessage}</h6>}

                    <TextField id="duration" label="Duration (minutes)" type="number" variant="standard"
                        onChange={ev => setDuration(Number(ev.target.value))}
                    />
                    {!isValidDuration && <h6 className={styles.errorMessage}>{isValidDurationMessage}</h6>}

                    <br />
                    <TextField id="director" label="Director" variant="standard"
                        onChange={ev => setDirector(ev.target.value)}
                    />
                    <br />
                    <TextField id="stars" label="Stars" variant="standard"
                        onChange={ev => { (ev.target.value != "") && setStars(ev.target.value) }}
                    />
                    <br />

                </Box>
                <Box
                    component="div"
                    sx={{
                        '& > :not(style)': { m: 1, width: '92%' },
                    }}
                >
                    <TextField id="Description" label="Description" variant="standard" fullWidth multiline maxRows={4} required
                        onChange={ev => setDescription(ev.target.value)}
                    />
                    {!isValidDescription && <h6 className={styles.errorMessage}>{isValidDescriptionMessage}</h6>}

                </Box>
                <Box
                    component="div"
                    sx={{
                        '& > :not(style)': { m: 1, width: '120px' },
                    }}
                >
                    <Rating name="half-rating" defaultValue={0} precision={0.5}
                        onChange={(event, newValue) => {
                            { newValue && setRating(newValue); }
                        }} />
                </Box>
                {isValidForm ?
                    <Button  variant="outlined" endIcon={<IoIosSend />} type="submit">Submit</Button>
                    : <Button variant="outlined" endIcon={<IoIosSend />} type="submit" disabled>Submit</Button>}

            </form>


        </article >
    )
}

export default NewMovieForm