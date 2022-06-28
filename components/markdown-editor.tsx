import useCodeMirror from '../hooks/codemirror';
import styles from '../styles/Editor.module.css';

interface Props {
  handleChange: (state: string) => void;
}

const MardownEditor = ({handleChange}:Props) => {
  
  const getLastValue = ():string | null => {
    if (typeof window !== "undefined") {
      const value = localStorage.getItem('code')
      return value ? value : null
    }
    return null
  }

  const [refContainer] = useCodeMirror<HTMLDivElement>(
    {
      initialDoc: getLastValue() ?? '# Hello World!',
      handleChange
    })
    
  return (
    <div
      ref={refContainer}
      className={styles.containerMarkdown}
    />
  )
}

export default MardownEditor