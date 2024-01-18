import { CommentType } from "./comments.interface"
import { GenreType } from "./genre.interface"

export interface MovieType {
    id?: number | string,
    title: string,
    description: string,

    director?: string,
    stars?: string
    year?: number | string,
    poster?: string,
    duration?: number | string,
    genreId: string | number,
    Genre?: GenreType

    rated?: string | number,

    comments?: CommentType[]

    userId?: string | number

    createdAt?: Date,
    updatedAt?: Date
}

export interface MovieId {
    id: string | number
  }