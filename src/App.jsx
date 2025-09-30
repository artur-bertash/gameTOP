import { useState, useEffect } from 'react'

import './App.css'
import CardGame from "./components/CardGame"
import Header from "./components/Topbar"

function App() {
  const [currectScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <>
      <Header currectScore={currectScore} bestScore={bestScore}></Header>
      <CardGame currectScore={currectScore} setCurrentScore={setCurrentScore} bestScore={bestScore} setBestScore={setBestScore}></CardGame>
    </>
  )
}

export default App
