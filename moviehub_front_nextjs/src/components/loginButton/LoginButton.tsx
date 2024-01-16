'use client'
import React, { FC } from 'react'
import './loginButton.css'

import Link from 'next/link'

type props = {
  href: string
}

const LoginButton:FC<props> = ({href}) => {

    const handleLogin = () => {
      
        console.log("login button pressed")
    }

  return (
    <div>
        <Link className='button' href={href} onClick={handleLogin}>Login</Link>
    </div>
  )
}

export default LoginButton