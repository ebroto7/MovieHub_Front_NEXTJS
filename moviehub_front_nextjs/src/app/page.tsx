
import './landing.css'
import LoginButton from '@/components/loginButton/LoginButton'
import Image from 'next/image'
import logo from '../assets/movieShareLogo.png'
import Link from 'next/link'

export default function landing() {
  return (
    <>
      <input type="checkbox" id="invert" /><label htmlFor="invert"></label>
      <input type="checkbox" id="sepia" /><label htmlFor="sepia"></label>
      <div className="content">
        <div className='film'>
          <div className="effect">
            <div className="grain"></div>
          </div>
        </div>
      </div>
      <div className='verticalContainer'>
        <Image className='logo' src={logo} alt="me" width="300" height="100" priority={true} />

        {/* <LoginButton /> */}
        <Link href="/api/auth/login">Login</Link>

      </div>


    </>
  )
}
