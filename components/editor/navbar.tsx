import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { HiHome } from 'react-icons/hi'
import styles from '../../styles/Editor.module.css'

interface Props {
  handleMessage: (message:string) => NodeJS.Timeout | undefined
}

const Navbar = ({handleMessage}: Props) => {
  const [showMenu, setShowMenu] = useState('hiddenMenu')

  const toggleShowMenu = () => {
    if(showMenu === 'showMenu') {
      setShowMenu('hiddenMenu')
    }

    if(showMenu === 'hiddenMenu') {
      setShowMenu('showMenu')
    }
  }

  return (
    <nav className={styles.navbar}>
          <div>
            <Link href='/'>
              <a><HiHome className={styles.homeIcon} /></a>
            </Link>
          </div>
          <div className={styles.menuContainer}>
            <button className={styles.menuButton} onClick={toggleShowMenu}>Options<AiOutlineDown /></button>
            <ul className={styles[showMenu]}>
              <li onClick={() => handleMessage('Copied Markdown')}>Copy Markdown</li>
              <li onClick={() => handleMessage('Copied HTML')}>Copy HTML</li>
            </ul>
          </div>
        </nav>
  )
}

export default Navbar