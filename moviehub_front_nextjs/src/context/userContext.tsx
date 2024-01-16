'use client'

import { UserType } from "@/types/user.interface"
import { FC, PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { useUser } from '@auth0/nextjs-auth0/client';

const axios = require('axios');

const baseAPIUrl = process.env.BASE_API_URL



type userContextProps = {
    createOrLoginUser: () => void,
    userLogged: UserType | null

    // userLogued: UserType
    // commentsList: CommentType[],
    // getCommentsByMovieId: (id: string | number) => void,
    // postNewComment: (comment: CommentType ) => void,

    // isError: boolean
}


export const userContext = createContext<userContextProps>({
    createOrLoginUser: () => { },
    userLogged: null

})

const UserLoggedProvider: FC<PropsWithChildren> = ({ children }) => {

    const { user: Auth0user, error, isLoading } = useUser();
    const [userLogged, setUserLogged] = useState<UserType | null>(null)


    useEffect(() => {
        console.log("user context", userLogged)
        createOrLoginUser()
    }, [Auth0user])
   
    const createOrLoginUser = async () => {
        const url: string = `${baseAPIUrl}/user`
        const data = {
            name: Auth0user?.name,
            email: Auth0user?.email
          }

        if (Auth0user) {
            try {
                const response = await axios.post(url, data);
                const user: UserType = response.data
                console.log("User Logged successfully!", user);
                setUserLogged(user)
            } catch (error) {
                if (axios.isAxiosError(error) && error) {
                    console.error(
                      "Failed to log user:",
                      // error.response.data.message || "Unknown Error"
                    );
                  } else {
                    console.error("Failed to log user:", error);
                  }
            }
        }

    }



    return (
        <userContext.Provider
            value={{
                createOrLoginUser, userLogged

                // user context methods & const/var
            }}
        >
            {children}
        </userContext.Provider>
    )
}


function useUserContext() {
    const context = useContext(userContext);
    if (context === undefined || context === null) {
        throw new Error('Comments Context not implemented')
    }
    return context
}

export { UserLoggedProvider, useUserContext }
