import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { HiHome } from 'react-icons/hi'
import { codeType } from '../hooks/copy'
import useExport from '../hooks/export-code'
import styles from '../styles/Editor.module.css'

interface Code {
  html: string
  markdown: string
}
interface Props {
  handleMessage: (message:string) => NodeJS.Timeout | undefined
  handleCopy: (method:codeType) => void
  code: Code
}

const Navbar = ({handleMessage, handleCopy, code}: Props) => {
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

  const {html, markdown} = useExport(code)

  const handleExport = (message:string, callback:() => void) => {
    callback()
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
              <li onClick={() => handleExport('Exported HTML', html)}>Export to HTML</li>
              <li onClick={() => handleExport('Exported Markdown', markdown)}>Export to Markdown</li>
            </ul>
          </div>
        </nav>
  )
}

export default Navbar