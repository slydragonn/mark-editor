import { useEffect, useState } from "react"

export type codeType = 'html' | 'markdown'

interface Props {
  html: string
  markdown: string
}

const useCopy = ({html, markdown}:Props) => {
  const [htmlCode, setHTML] = useState(html || '')
  const [markdownCode, setMarkdown] = useState(markdown || '')

  useEffect(() => {
    setHTML(html)
    setMarkdown(markdown)
  }, [html, markdown])


  const copyCode = (method:codeType) => {
    const copyMethods = {
      html: async () => await navigator.clipboard.writeText(htmlCode),
      markdown: async () => await navigator.clipboard.writeText(markdownCode)
    }

    return copyMethods[method]()
  }


  return {
    html: htmlCode,
    markdown: markdownCode,
    copyCode
  }
}

export default useCopy