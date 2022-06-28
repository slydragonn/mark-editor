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
          <p>A simple and straightforward mardown editor.</p>
          <p>Export your code to HTML or to markdown itself, all very simple.</p>
        </div>
        <div className={styles.button}>
          <Link href='/editor'>
            <a>let&apos;s go</a>
          </Link>
        </div>
        <Link href='https://github.com/slydragonn/mark-editor' passHref>
          <a target='_blank'><BsGithub className={styles.githubIcon} /></a>
        </Link>
      </section>
    </div>
  )
}

export default Home
