import { CommentType } from "./comments.interface";
import { MovieType } from "./movie.interface";

export interface UserType {
    id: string | number,
    name: string,
    email: string,
    movies?: MovieType[],
    comments?: CommentType[]

    createdAt?: Date,
    updatedAt?: Date
}