import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowDown, BsGithub } from 'react-icons/bs'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  
  return (
    <div>
      <Head>
        <meta name="google-site-verification" content="eCC5ZfzjHzoPnwPVJqUdh_Wng1wD7E0iJpukIVrrSPU" />
      </Head>
      <section className={styles.homeContainer}>
        <h1 className={styles.name}>Mark Writer</h1>
        <section className={styles.textContainer}>
          <h2 className={styles.text}>Simple</h2>
          <h2 className={styles.text}>Markdown</h2>
          <h2 className={styles.text}>Editor</h2>
        </section>
        <BsArrowDown className={styles.arrowDownIcon}/>
      </section>
      <section className={styles.scrollContainer}>
        <Image
        src='/mark.png'
        alt='mark editor logo'
        width={75}
        height={75}
         />
        <div className={styles.legend}>
          <p>A simple and straightforward Markdown Web Editor.</p>
          <p>Export your code to HTML or to markdown itself, all very simple.</p>
        </div>
        <Link href='/editor'>
          <a>
            <div className={styles.button}>
              <span>let&apos;s go</span>
            </div>
          </a>
        </Link>
        <Link href='https://github.com/slydragonn/mark-editor' passHref>
          <a target='_blank'><BsGithub className={styles.githubIcon} /></a>
        </Link>
      </section>
    </div>
  )
}

export default Home
