import './App.css';
import React, { useState, useEffect, useRef } from "react"

function App() {

  const STARTING_TIME = 60

  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
  const [startGame, setStartGame] = useState(false)
  const [wordCount, setWordCount] = useState(0)

  const textareaRef = useRef(null)



  useEffect(() => {

    if (timeRemaining > 0 && startGame) {
      setTimeout(() => {
        calculateWordCount(text)
        setTimeRemaining(prevTime => prevTime - 1)
      }, 1000)
    } else if (timeRemaining === 0) {
      endGame()
    }
  }, [timeRemaining, startGame])


  const handleChange = (e) => {
    const { value } = e.target
    setText(value)
  }

  const playGame = () => {
    setStartGame(true)
    setWordCount(0)
    setTimeRemaining(STARTING_TIME)
    setText("")
    textareaRef.current.disabled = false
    textareaRef.current?.focus()
  }

  const endGame = () => {
    setStartGame(false)
    calculateWordCount(text)
  }

  const calculateWordCount = (text) => {
    console.log(text)
    const wordsArr = text.trim().split(" ")
    const filteredWords = wordsArr.filter(word => word !== "")
    return setWordCount(filteredWords.length)
  }

  return (
    <div>
      <h1>Title</h1>
      <textarea
        ref={textareaRef}
        disabled={!startGame}
        onChange={handleChange}
        value={text} />
      <h4>Time remaining: {timeRemaining} </h4>
      <button disabled={startGame} onClick={playGame}>Start</button>
      <h1>Word count:{wordCount}</h1>
    </div>

  )
}

export default App