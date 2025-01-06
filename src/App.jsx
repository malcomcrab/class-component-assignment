import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunctionalInput from './TodoComponent'
import ClassInput from './ClassComponentVersion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ClassInput />
      <br/>
      <FunctionalInput />
    </>
  )
}

export default App
