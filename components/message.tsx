import styles from '../styles/Editor.module.css'

interface Props {
  message: string
  show: string
}

const Message = ({message, show}: Props) => {

  return (
    <section className={styles[show]}>
      {message}
    </section>
  )
}

export default Message