
import styles from './home.module.css'
import HeaderBar from '@/components/header/Header'

// change Font
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })




export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.background}>
      <HeaderBar />
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>Footer</footer>
    </div>
  )
}
