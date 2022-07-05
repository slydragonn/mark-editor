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
  const [cleanMarkdown, setMarkdown] = useState('')
  
  const markdownToHtml = (mardownCode:string) => {
    const clearMarkdown = DOMPurify.sanitize(mardownCode)
    localStorage.setItem('code', clearMarkdown)
    setMarkdown(clearMarkdown)
    
    const html = marked.parse(mardownCode)
    const cleanHtml = DOMPurify.sanitize(html)
    return setHtml(cleanHtml)
  }

  return {
    html,
    markdown: cleanMarkdown,
    converter: markdownToHtml
  }
}

export default useCodeConverter