import Navbar from '../components/editor-navbar'
import EditorLayout from '../components/layouts/editor'
import MardownArea from '../components/markdown-code'
import HtmlView from '../components/view-html-code'
import useCodeConverter from '../hooks/code-converter'
import styles from '../styles/Editor.module.css'

const Editor = () => {
  const code = useCodeConverter()
  return (
    <div className={styles.pageContainer}>
      <EditorLayout>
        <Navbar />
        <div className={styles.editorContainer}>
        <MardownArea handleChange={code.converter} />
        <HtmlView html={code.value} />
        </div>
      </EditorLayout>
    </div>
  )
}

export default Editor
