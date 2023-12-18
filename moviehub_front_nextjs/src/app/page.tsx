import Image from 'next/image'
import styles from './page.module.css'
import './landing.css'
import LoginButton from '@/components/loginButton/LoginButton'



export default function Home() {
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
      <LoginButton />
    </>
  )
}
