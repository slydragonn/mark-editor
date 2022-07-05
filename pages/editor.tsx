import Navbar from '../components/editor-navbar'
import HtmlView from '../components/html-view'
import EditorLayout from '../components/layouts/editor'
import MardownEditor from '../components/markdown-editor'
import Message from '../components/message'
import useCodeConverter from '../hooks/code-converter'
import useCopy from '../hooks/copy'
import useMessage from '../hooks/message'
import styles from '../styles/Editor.module.css'

const Editor = () => {
  const { html, markdown, converter } = useCodeConverter()

  const { copyCode } = useCopy({html, markdown})

  const { textMessage, showMessage, setMessage } = useMessage()
  
  return (
    <div className={styles.pageContainer}>
      <Message message={textMessage} show={showMessage}/>
      <EditorLayout>
        <Navbar handleMessage={setMessage} handleCopy={copyCode} />
        <div className={styles.editorContainer}>
        <MardownEditor handleChange={converter} />
        <HtmlView html={html} />
        </div>
      </EditorLayout>
    </div>
  )
}

export default Editor
