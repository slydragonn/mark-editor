/* eslint-disable react-hooks/exhaustive-deps */
import DOMPurify from 'dompurify'
import { marked } from 'marked'
import { useState } from 'react'

interface Code {
  html: string
  converter: (mardownCode: string) => void
}

const useCodeConverter = ():Code => {
  const [html, setHtml] = useState('')
  
  const markdownToHtml = (mardownCode:string) => {

    localStorage.setItem('code', DOMPurify.sanitize(mardownCode))
    
    const html = marked.parse(mardownCode)
    const cleanHtml = DOMPurify.sanitize(html)
    return setHtml(cleanHtml)
  }

  return {
    html,
    converter: markdownToHtml
  }
}

export default useCodeConverter