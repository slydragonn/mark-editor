const createHtmlTemplate = (content:string) => `
<!DOCTYPE html>
<html>
  <head>
    <title>mark-editor-html-code</title>
  <head>
  <body>
    ${content}
  <body/>
<html>
`

const identifyCode = (type:string, code:string) => {
  if (type === 'text/html') return createHtmlTemplate(code)
  return code
}

export default async function handler(req:any, res:any) {
  if (req.method === "POST") {
    const {code, filename} = JSON.parse(req.body)
    
    if(!code || !filename) return res.status(400).json({error: "missing code or filename"}).end()

    if(typeof code !== 'string' || typeof filename !== 'string') return res.status(400).end()

    const type = req.headers['content-type']
    res.setHeader('Content-Type', `${type}; charset=utf-8`)
    res.setHeader('Content-Disposition', `attachment; filename=${filename}`)
    res.status(200).write(identifyCode(type, code))
    return res.end()
  }
  return res.status(404).end()
}