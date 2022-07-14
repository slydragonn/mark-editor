import styles from '../styles/Editor.module.css'


interface Props {
  html: string
}

const HtmlView = ({html}:Props) => {
  return (
    <div 
      className={styles.containerHtml}
      dangerouslySetInnerHTML={{__html: html}}
      data-cy='html-view'
    />
  )
}

export default HtmlView