'use client'
import React from 'react'
import './loginButton.css'
type Props = {}

const LoginButton = (props: Props) => {

    const handleLogin = () => {
        console.log("login button pressed")
    }

  return (
    <div>
        <button className='button'  onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginButton