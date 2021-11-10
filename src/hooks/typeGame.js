import {useState, useEffect, useRef} from 'react'

function TypeGame(startTime){

    const [text, setText] = useState('')
    const [wordCount, setWordCount] = useState('')
    const [remainingTime, setRemainingTime] = useState(startTime)
    const [isGameStart, setIsGameStart] = useState(false)
    const textareaRef = useRef(null)
  
    function handleChange(e) {
      const { value } = e.target
      setText(value)
    }
  
    function calculateWordCount(string) {
      const res = string.split(' ')
      setWordCount(res.filter(word => word !== '').length)
    }
  
    function startGame() {
      setIsGameStart(true)
      setRemainingTime(startTime)
      setText('')
      setWordCount('')
      textareaRef.current.disabled = false
      textareaRef.current.focus()
    }
  
    function endGame() {
      calculateWordCount(text)
      setIsGameStart(false)
    }
  
    useEffect(() => {
      if (isGameStart && remainingTime > 0) {
        setTimeout(() => {
          setRemainingTime(oldtime => oldtime - 1)
        }, 1000)
      } else {
        endGame()
      }
    }, [remainingTime, isGameStart])


    return {text, handleChange, startGame, textareaRef, wordCount, isGameStart, remainingTime}
}

export default TypeGame