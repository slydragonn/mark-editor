import type { NextPage } from 'next'
import Link from 'next/link'
import { BsArrowDown, BsGithub } from 'react-icons/bs'
import { SiEditorconfig } from 'react-icons/si'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  
  return (
    <div>
      <section className={styles.homeContainer}>
        <h1 className={styles.name}>Mark Editor</h1>
        <section className={styles.textContainer}>
          <h2 className={styles.text}>Simple</h2>
          <h2 className={styles.text}>Markdown</h2>
          <h2 className={styles.text}>Editor</h2>
        </section>
        <BsArrowDown className={styles.arrowDownIcon}/>
      </section>
      <section className={styles.scrollContainer}>
        <SiEditorconfig className={styles.editorIcon}/>
        <div className={styles.legend}>
          <p>Un simple y sencillo editor de mardown.</p>
          <p>Exporta tu codigo a html o al mismo markdown, todo muy simple.</p>
        </div>
        <div className={styles.button}>
          <Link href='/editor'>
            <a>let&apos;s go</a>
          </Link>
        </div>
        <BsGithub className={styles.githubIcon} />
      </section>
    </div>
  )
}

export default Home
