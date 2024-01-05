import React from 'react'
import Link from 'next/link'
import Image from 'next/image'



import logo from '../../assets/movieShareLogo.png'
import './header.css'
import { FaUser } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";
import { BsExclamationCircle } from "react-icons/bs";



type MenuItem = {
  name: string,
  icon: React.ReactNode,
  href: string
}
const userId = 1

const menuItems: MenuItem[] = [
  {
    name: "User",
    icon: <FaUser />,
    href: `/home/user/${userId}`
  },
  {
    name: "Logout",
    icon: <RiLogoutCircleLine />,
    href: `/`
  },
  {
    name: "About us",
    icon: <BsExclamationCircle />,
    href: `/home/AboutUs`
  }
]


const HeaderBar = () => {


  return (
    <header className='header'>
      <Link href="/home" >
        <Image className="logo" src={logo} alt="me" width="300" height="100" priority={true} />
      </Link>
      <ul>
        {menuItems.map(({ name, icon, href }) => (
          <li>
            <Link href={href}> {icon} {name} </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default HeaderBar