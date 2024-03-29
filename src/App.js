import './App.css';
import useWordGame from './hooks/useWordGame'

function App() {

  const {text, handleChange, 
    startGame, textareaRef,
     wordCount, isGameStart, 
     remainingTime} = useWordGame(10)

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
