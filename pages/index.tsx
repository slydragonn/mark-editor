import DOMPurify from 'dompurify'
import { marked } from 'marked'
import type { NextPage } from 'next'
import { useState } from 'react'
import EditorLayout from '../components/layouts/editor'
import MardownArea from '../components/markdown-code'
import HtmlView from '../components/view-html-code'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [code, setCode] = useState('')

  const handleChange = (code: string) => {
    const html = marked.parse(code)
    const cleanHtml = DOMPurify.sanitize(html)
    return setCode(cleanHtml)
  }
  return (
    <div className={styles.container}>
      <h1 style={{color: '#fff'}}>Mark Editor</h1>
      <EditorLayout>
        <MardownArea handleChange={handleChange} />
        <HtmlView html={code} />
      </EditorLayout>
    </div>
  )
}

export default Home
