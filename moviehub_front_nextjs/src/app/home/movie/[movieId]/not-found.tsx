import styles from '../../home.module.css'

import Link from 'next/link'

export default function NotFound() {
  return (
    <section className={styles.centerDivContainer}>
      <div className={styles.glass}>
        <div className={styles.halfContainer}>
          <h2>Not Found</h2>
          <p>Could not find this movie</p>
          <Link className={styles.mainButton} href="/home">Return Home</Link>
        </div>
      </div>
    </section>

  )
}