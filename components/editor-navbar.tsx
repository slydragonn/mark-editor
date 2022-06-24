import Link from 'next/link'
import { ReactElement } from 'react'
import styles from '../styles/Editor.module.css'

const Navbar = ():ReactElement => {
  return (
    <nav className={styles.navbar}>
          <div>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </div>
          <div>Options</div>
        </nav>
  )
}

export default Navbar