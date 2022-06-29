import Editor from "@monaco-editor/react"
import styles from '../../styles/Editor.module.css'

interface Props {
  handleChange: (value:string) => void
}

const MardownEditor = ({handleChange}:Props) => {
  
  const getLastValue = ():string | null => {
    if (typeof window !== "undefined") {
      const value = localStorage.getItem('code')
      handleChange(value ?? '')
      return value ? value : null
    }
    return null
  }

    
  return (
    <div className={styles.containerMarkdown}>
      <Editor
        height='100%'
        theme="vs-dark"
        defaultLanguage="markdown"
        value={getLastValue() ?? '# Hello World!'}
        onChange={(value:any) => handleChange(value)}
        options={{minimap: { enabled: false }}}
      />
    </div>
  )
}

export default MardownEditor