import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { getSession } from '@auth0/nextjs-auth0';


import logo from '../../assets/movieShareLogo.png'
import './header.css'

import BurguerMenuLinks from './BurguerMenuLinks'


const HeaderBar = async () => {

  const { user } = await getSession();


  return (
    <header className='header'>
      <Link href="/home" >
        <Image className="logo" src={logo} alt="me" width="300" height="100" priority={true} />
      </Link>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Image src={user.picture}
          width="100" height="100"
          priority={true}
          alt={user.name} />

        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>

      </div>
      <BurguerMenuLinks />

    </header>
  )
}

export default HeaderBar