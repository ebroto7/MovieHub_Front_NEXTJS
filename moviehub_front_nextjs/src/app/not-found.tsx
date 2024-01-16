import Link from 'next/link'
import styles from '../app/home/home.module.css'
import HeaderBar from '@/components/header/Header'

export default function NotFound() {
  return (
    <div className={styles.background}>
      <HeaderBar />
      <main className={styles.main}>
        <div>


          <h2>Not Found</h2>
          <p>Could not find requested resource</p>
          <Link href="/home">Return Home</Link>
        </div>
      </main>
      <footer className={styles.footer}>Footer</footer>
    </div>

  )
}