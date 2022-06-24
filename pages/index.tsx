import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.name}>Mark Editor</h1>
      <section className={styles.textContainer}>
        <h2 className={styles.text}>Simple</h2>
        <h2 className={styles.text}>Markdown</h2>
        <h2 className={styles.text}>Editor</h2>
      </section>
      <div className={styles.button}>
        <Link href='/editor'>
          <a>let&apos;s go</a>
        </Link>
      </div>
    </div>
  )
}

export default Home
