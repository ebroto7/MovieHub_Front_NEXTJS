'use client'
import React, { FC } from 'react'
import './loginButton.css'

import Link from 'next/link'

type props = {
  href: string
}

const LoginButton:FC<props> = ({href}) => {



  return (
    <div>
        <Link className='button' href={href} >Login</Link>
    </div>
  )
}

export default LoginButton