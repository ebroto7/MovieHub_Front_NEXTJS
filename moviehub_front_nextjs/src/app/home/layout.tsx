
import styles from './home.module.css'

import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })
import logo from '../../assets/movieShareLogo.png'



export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header className={styles.header}>
      <Image className={styles.logo} src={logo} alt="me" width="300" height="100" priority={true} />

      </header>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>Footer</footer>
    </>
  )
}
