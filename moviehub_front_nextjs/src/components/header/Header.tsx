import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { getSession } from '@auth0/nextjs-auth0';


import logo from '../../assets/movieShareLogo.png'
import './header.css'

import BurguerMenuLinks from './BurguerMenuLinks'


const HeaderBar = async () => {

  const user = await getSession();
  // console.log(user)


  return (
    <header className='header'>
      <Link href="/home" >
        <Image className="logo" src={logo} alt="me" width="300" height="100" priority={true} />
      </Link>
      {user
        ? <div style={{ display: 'flex', gap: '1rem' }}>
          <Image src={user.user.picture}
            width="50" height="50"
            priority={true}
            alt={user.name} />

          {/* <div> */}
          <h2>Welcome home {user.user.given_name}!</h2>
          {/* <p>{user.user.email}</p> */}
          {/* </div> */}

        </div>
        : <h3>user not found</h3>
      }

      <BurguerMenuLinks />

    </header>
  )
}

export default HeaderBar