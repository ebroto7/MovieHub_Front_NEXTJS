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
import { IoIosSend } from "react-icons/io";

import { useCommentsContext } from '@/context/commentsContext';
import { CommentType } from '@/types/comments.interface';

// import { postNewComment } from '@/lib/commentsApi';
import { getMovieById } from '@/lib/api/movieApi/movieApi';
import { MovieType } from '@/types/movie.interface';

type Props = {
    movie: number | string,
    movieTitle: string
}


// const newComment: CommentType = {

//     movieId: 1,
//     title: 'goood movie',
//     description: 'I very Like',
//     ratting: 3.5,
//     userId: 7
// }


const CreateCommentModal: FC<Props> = ({ movie, movieTitle }) => {
    // para conseguir la info de la pelicula y poner el titulo en el modal
    // useEffect(() => {
    //     const movieInfo: MovieType = await getMovieById(movie)
    // }, [])

    const {postNewComment} = useCommentsContext()

    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState<string>("")
    const [comment, setComent] = useState<string>("")
    const [rating, setRating] = useState<number>(0);

    const [isValidTitle, setIsValidTitle] = useState<boolean>(false)
    const [isValidTitleMessage, setIsValidTitleMessage] = useState<string>("")

    const [isValidComment, setIsValidComment] = useState<boolean>(false)
    const [isValidCommentMessage, setIsValidCommentMessage] = useState<string>("")


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
        if (isValidTitle && isValidComment) {
            const newComment: CommentType = {

                movieId: movie,
                title: title,
                description: comment,
                ratting: rating,
                userId: 7
            }

            postNewComment(newComment)
            setOpen(false)
        }
    };

    const validateForm = () => {

        if (title.length < 3) {
            setIsValidTitleMessage("The title must be more than 3 characters.")
            setIsValidTitle(false)
        } else {
            setIsValidTitle(true)
        }
        if (comment.length < 3) {
            setIsValidCommentMessage("Your comment must be more than 3 characters.")
            setIsValidComment(false)
        } else {
            setIsValidComment(true)
        }

    }

    return (
        <>
            <button className='addCommentButton' onClick={handleClickOpen} >
                <FaArrowRight className="icon" />
                <p className="text"> add comment </p>
            </button>
            <Dialog 
                    open={open} 
                    fullWidth={true}
                    maxWidth={'sm'}
                    onClose={handleClose}>
                <DialogTitle>*** {movieTitle} ***</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Do you want to give us your opinion?
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
                    {!isValidTitle && <h6 className='errorMessage'>{isValidTitleMessage}</h6>}

                    <TextField
                        required
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Your comment"
                        type="text"
                        fullWidth
                        variant="standard"
                        multiline
                        maxRows={4}
                        onChange={ev => { (ev.target.value != "") && setComent(ev.target.value) }}

                    />
                    {!isValidComment && <h6 className='errorMessage'>{isValidCommentMessage}</h6>}

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
                    {(isValidTitle && isValidComment)
                        ? <Button onClick={HandleSubmit} variant="outlined" endIcon={<IoIosSend />}>Post</Button>
                        : <Button disabled>Post</Button>}
                </DialogActions>
                {/* {!isValidForm && <p className='errorMessage'>{isValidMessage}</p>} */}

            </Dialog>
        </>
    );
}
export default CreateCommentModal