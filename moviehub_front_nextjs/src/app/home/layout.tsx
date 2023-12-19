
import styles from './home.module.css'

import './home.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header className={styles.header} >NavBar</header>
      <main className={styles.main}>
        <aside className={styles.aside}>SideBar</aside>
        <section className={styles.section}>{children}</section>
      </main>
      <footer className={styles.footer}>Footer</footer>
    </>
  )
}
