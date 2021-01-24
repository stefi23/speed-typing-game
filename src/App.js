import './App.css';
import React, { useState, useEffect } from "react"

function App() {

  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(3)

  useEffect(() => {
    const interval = setInterval(() => {

      setTimeRemaining(prevState => {
        if (prevState !== 0) {
          setTimeRemaining(prevState - 1)
        } else {
          setTimeRemaining(0)
        }
      })

    }, 1000)
    return () => clearInterval(interval);

  }, []);

  const handleChange = (e) => {
    const { value } = e.target
    setText(value)
  }

  const calculateWordCount = (text) => {
    const wordsArr = text.trim().split(" ")
    const filteredWords = wordsArr.filter(word => word !== "")
    return filteredWords.length
  }

  return (
    <div>
      <h1>Title</h1>
      <textarea
        onChange={handleChange}
        value={text} />
      <h4>Time remaining: {timeRemaining} </h4>
      <button onClick={() => calculateWordCount(text)}>Start</button>
      <h1>Word count:</h1>
    </div>

  )
}

export default App