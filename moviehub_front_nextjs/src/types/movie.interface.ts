import { CommentType } from "./comments.interface"

export interface MovieType {
    id: number | string,
    title: string,
    description: string,

    genreId: string | number,
    director?: string,
    stars?: string[]
    year: number,
    poster?: string,
    duration: number,

    rated?: number,

    comments?: CommentType[]

    userId: string | number

    createdAt?: Date,
    updatedAt?: Date
}

export interface MovieId {
    id: string
  }