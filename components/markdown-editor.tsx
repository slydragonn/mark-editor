import useCodeMirror from '../hooks/codemirror';
import styles from '../styles/Editor.module.css';

interface Props {
  handleChange: (state: string) => void;
}

const MardownEditor = ({handleChange}:Props) => {
  const [refContainer] = useCodeMirror<HTMLDivElement>(
    {
      initialDoc: '# Hello world!',
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