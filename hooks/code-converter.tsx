/* eslint-disable react-hooks/exhaustive-deps */
import DOMPurify from 'dompurify'
import { marked } from 'marked'
import { useState } from 'react'

interface Code {
  html: string
  markdown: string
  converter: (mardownCode: string) => void
}

const useCodeConverter = ():Code => {
  const [html, setHtml] = useState('')
  const [markdown, setMarkdown] = useState('')
  
  const markdownToHtml = (mardownCode:string) => {
    const clearMarkdown = DOMPurify.sanitize(mardownCode)
    localStorage.setItem('code', clearMarkdown)
    setMarkdown(clearMarkdown)
    
    const html = marked.parse(clearMarkdown)
    return setHtml(html)
  }

  return {
    html,
    markdown,
    converter: markdownToHtml
  }
}

export default useCodeConverter