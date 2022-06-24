import DOMPurify from 'dompurify'
import { marked } from 'marked'
import { useState } from 'react'

interface Code {
  value: string
  converter: (mardownCode: string) => void
}

const useCodeConverter = ():Code => {
  const [code, setCode] = useState('')

  const markdownToHtml = (mardownCode:string) => {
    const html = marked.parse(mardownCode)
    const cleanHtml = DOMPurify.sanitize(html)
    return setCode(cleanHtml)
  }

  return {
    value: code,
    converter: markdownToHtml
  }
}

export default useCodeConverter