import Navbar from '../components/editor-navbar'
import HtmlView from '../components/html-view'
import EditorLayout from '../components/layouts/editor'
import MardownEditor from '../components/markdown-editor'
import useCodeConverter from '../hooks/code-converter'
import styles from '../styles/Editor.module.css'

const Editor = () => {
  const {value, converter} = useCodeConverter()
  
  return (
    <div className={styles.pageContainer}>
      <EditorLayout>
        <Navbar />
        <div className={styles.editorContainer}>
        <MardownEditor handleChange={converter} />
        <HtmlView html={value} />
        </div>
      </EditorLayout>
    </div>
  )
}

export default Editor
