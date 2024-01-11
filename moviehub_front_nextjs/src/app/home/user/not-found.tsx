import styles from '../../home.module.css'

import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className={styles.glass}>
      <h2>Not Found</h2>
      <p>Could not find this user</p>
      <Link href="/home">Return Home</Link>
    </div>
  )
}