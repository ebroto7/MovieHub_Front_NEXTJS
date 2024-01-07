import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import logo from '../../assets/movieShareLogo.png'
import './header.css'

import BurguerMenuLinks from './BurguerMenuLinks'


const HeaderBar = () => {


  return (
    <header className='header'>
      <Link href="/home" >
        <Image className="logo" src={logo} alt="me" width="300" height="100" priority={true} />
      </Link>

      <BurguerMenuLinks />

    </header>
  )
}

export default HeaderBar