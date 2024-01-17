import { getUserById } from './userApi'
import { UserType } from '@/types/user.interface'

import { describe, expect, test } from 'vitest'

const userMock: UserType = {
    id: 1,
    name: "Enric",
    email: "test@test.com",
    movies: [],
    comments: [],
    createdAt: new Date,
    updatedAt: new Date
}

const userIdMock: string | number = 1


describe("get user from api tests", () => {
    test("should call correct function", () => {

        global.fetch = () =>
            Promise.resolve<any>({
                status: 200,
                json: () => Promise.resolve(userMock)
            })

        const response = getUserById(userIdMock)
        expect(response).resolves.toEqual(userMock)
    })

    test("should call error 400", () => {

        global.fetch = () =>
            Promise.resolve<any>({
                status: 404,
                json: () => Promise.resolve()
            })

        const response = getUserById(userIdMock)
        expect(response).resolves.toEqual(new Error("Request not found"))
    })

    test("should call server error", () => {
        global.fetch = () =>
        Promise.resolve<any>({
            status: 500,
            json: () => Promise.resolve()
        })

        const response = getUserById(userIdMock)
        expect(response).resolves.toEqual(new Error("Server error"))
    })

})