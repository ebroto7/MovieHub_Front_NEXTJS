export interface CommentType {
    id: string | number,
    title: string,
    description: string
    ratting: number

    movieID: String | number,
    userId: String | number
    createdAt?: Date,
    updatedAt?: Date
}