import { EditorState } from '@codemirror/state'
import { useCallback } from 'react'
import Navbar from '../components/editor-navbar'
import HtmlView from '../components/html-view'
import EditorLayout from '../components/layouts/editor'
import MardownEditor from '../components/markdown-editor'
import Message from '../components/message'
import useCodeConverter from '../hooks/code-converter'
import useMessage from '../hooks/message'
import styles from '../styles/Editor.module.css'

const Editor = () => {
  const { html, converter } = useCodeConverter()
  const handleChange = useCallback(
    (state:EditorState) => converter(state.doc.toString()),
    [converter]
  )

  const { textMessage, showMessage, setMessage } = useMessage()
  
  return (
    <div className={styles.pageContainer}>
      <Message message={textMessage} show={showMessage}/>
      <EditorLayout>
        <Navbar handleMessage={setMessage} />
        <div className={styles.editorContainer}>
        <MardownEditor handleChange={handleChange} />
        <HtmlView html={html} />
        </div>
      </EditorLayout>
    </div>
  )
}

export default Editor
