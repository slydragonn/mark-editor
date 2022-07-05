import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { HiHome } from 'react-icons/hi'
import { codeType } from '../hooks/copy'
import styles from '../styles/Editor.module.css'

interface Props {
  handleMessage: (message:string) => NodeJS.Timeout | undefined
  handleCopy: (method:codeType) => void
}

const Navbar = ({handleMessage, handleCopy}: Props) => {
  const [showMenu, setShowMenu] = useState('hiddenMenu')

  const toggleShowMenu = () => {
    if(showMenu === 'showMenu') {
      setShowMenu('hiddenMenu')
    }

    if(showMenu === 'hiddenMenu') {
      setShowMenu('showMenu')
    }
  }

  const handleClick = (method:codeType, message:string) => {
    handleCopy(method)
    handleMessage(message)
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
              <li onClick={() => handleClick('markdown','Copied Markdown')}>Copy Markdown</li>
              <li onClick={() => handleClick('html', 'Copied HTML')}>Copy HTML</li>
            </ul>
          </div>
        </nav>
  )
}

export default Navbar