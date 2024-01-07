'use client'
import './comments.styles.css'

import { FC, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { FaArrowRight } from 'react-icons/fa';
import { FaCloudUploadAlt } from "react-icons/fa";

import { CommentType } from '@/types/comments.interface';

import { postNewComment } from '@/lib/commentsApi';
import { getMovieById } from '@/lib/movieApi';
import { MovieType } from '@/types/movie.interface';

type Props = {
    movie: number | string
}


// const newComment: CommentType = {

//     movieId: 1,
//     title: 'goood movie',
//     description: 'I very Like',
//     ratting: 3.5,
//     userId: 7
// }


const CreateCommentModal: FC<Props> = ({ movie }) => {
    // para conseguir la info de la pelicula y poner el titulo en el modal
    // useEffect(() => {
    //     const movieInfo: MovieType = await getMovieById(movie)
    // }, [])

    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState<string>("")
    const [comment, setComent] = useState<string>("")
    const [rating, setRating] = useState<number>(0);
    const [isValidForm, setIsValidForm] = useState<boolean>(false)
    const [isValidMessage, setIsValidMessage] = useState<string>("")

    useEffect(() => {
        validateForm()
    }, [title, comment])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const HandleSubmit = () => {
        if (isValidForm) {
            const newComment: CommentType = {

                movieId: movie,
                title: title,
                description: comment,
                ratting: rating,
                userId: 7
            }

            postNewComment(newComment)
            console.log("add comment open menu", (newComment))
            setOpen(false)
        }
    };

    const validateForm = () => {

        let message: string = "Please check required fields. "

        let validate = true
        if (title.length < 3) {
            validate = false
            message = message + "The movie title must be more than 3 characters. "
        }
        if (comment.length < 3) {
            validate = false
            message = message + "The movie description must be more than 3 characters. "
        }
        setIsValidMessage(message)
        setIsValidForm(validate)
    }

    return (
        <>
            <button className='addCommentButton' onClick={handleClickOpen} >
                <FaArrowRight className="icon" />
                <p className="text"> add comment </p>
            </button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        required
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Title"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={ev => { (ev.target.value != "") && setTitle(ev.target.value) }}

                    />
                    <TextField
                        required
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Your comment"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={ev => { (ev.target.value != "") && setComent(ev.target.value) }}

                    />
                    <div className='formRating'>
                        <Rating
                            name="simple-controlled"
                            precision={0.5}
                            value={rating}
                            onChange={(event, newValue) => {
                                { newValue && setRating(newValue); }
                            }}
                        />
                    </div>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    {isValidForm
                        ? <Button onClick={HandleSubmit} variant="outlined" startIcon={<FaCloudUploadAlt />}>Post</Button>
                        : <Button disabled>Post</Button>}
                </DialogActions>
                {!isValidForm && <p>{isValidMessage}</p>}

            </Dialog>
        </>
    );
}
export default CreateCommentModal