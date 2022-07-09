interface Code {
  html: string
  markdown: string
}

const useExport = (code: Code) => {

  const createDownloadLink = (blob:Blob, filename:string) => {
    const link = document.createElement('a') 
      link.href = window.URL.createObjectURL(blob)
      link.setAttribute('download', filename)
      link.click()
      link.remove()
  }
  
  const setFileValue = async (type: string, code: string, filename:string) => {
    try {
      const ftch = await fetch('/api/get-file', 
        {
          method: 'POST',
          headers: {
          "Content-type": type
          },
          body: JSON.stringify({
            code: code,
            filename
          })
        })
     
        const fileBlob = await ftch.blob()
        createDownloadLink(fileBlob, filename)
        
        if(!ftch.ok) throw new Error(`unexpected response ${ftch.statusText}`)
      
    } catch (err) {
      console.log(err)
    }
  }

  return {
    html: () => setFileValue('text/html', code.html, 'mark-editor.html'),
    markdown: () => setFileValue('text/markdown', code.markdown, 'mark-editor.md')
  }
}

export default useExport