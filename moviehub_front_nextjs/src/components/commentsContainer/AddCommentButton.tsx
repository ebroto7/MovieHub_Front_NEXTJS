'use client'
import React from 'react'

type Props = {}

const AddCommentButton = () => {


    const openNewCommentMenu = () => {
        console.log("add comment open menu")
    }



    return (
        <button className='addCommentButton' onClick={openNewCommentMenu} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
            </svg>

            <p className="text"> add comment </p>
        </button>
    )
}

export default AddCommentButton