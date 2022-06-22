import { ReactNode } from "react"
import styles from '../../styles/Editor.module.css'

interface Props {
  children: ReactNode
}

const EditorLayout = ({children}: Props) => {
  return (
    <div className={styles.mainContainer}>
        {children}
      </div>
  )
}

export default EditorLayout