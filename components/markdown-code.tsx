import styles from '../styles/Editor.module.css';

interface Props {
  handleChange: (e: string) => void;
}

const MardownArea = ({handleChange}:Props) => {
  return (
    <textarea 
     className={styles.containerMarkdown}
     onChange={(event) => handleChange(event.target.value)}
    />
  )
}

export default MardownArea