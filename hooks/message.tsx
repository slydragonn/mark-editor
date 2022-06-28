import { useState } from 'react'

const useMessage = () => {
  const [showMessage, setShowMessage] = useState('hiddenMessage')
  const [textMessage, setTextMessage] = useState('')

  const setMessage = (message:string) => {
    setTextMessage(message)
    return toggleShowMessage()
  }
  
  const toggleShowMessage = () => {
    if(showMessage === 'hiddenMessage') {
      setShowMessage('showMessage')
      return setTimeout(() => {
        setShowMessage('hiddenMessage')
      }, 5000)
    }
  }

  return {
    textMessage,
    showMessage,
    setMessage
  }
}

export default useMessage