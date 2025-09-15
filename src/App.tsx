import { useState } from 'react'
import { User } from './components/User'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <User />
    </>
  )
}

export default App
