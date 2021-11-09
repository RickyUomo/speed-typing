import './App.css';
import { useState, useEffect, useRef } from 'react'

function App() {

  const [text, setText] = useState('')
  const [wordCount, setWordCount] = useState('')
  const [remainingTime, setRemainingTime] = useState(5)
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
    setRemainingTime(5)
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

  return (
    <div>
      <h1>Speed Typing Game</h1>
      <textarea
        ref={textareaRef}
        type="text"
        value={text}
        onChange={handleChange}
        disabled={!isGameStart}
      />
      <h4>Time Remaining: {remainingTime}</h4>
      <button
        onClick={startGame}
        disabled={isGameStart}
      >
        Start
      </button>
      <h1>Words: {wordCount ? wordCount : '???'}</h1>
    </div>
  );
}

export default App;
