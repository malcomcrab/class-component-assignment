import { useState } from 'react'
import './App.css'
import FunctionalInput from './components/TodoComponent'
import ClassInput from './components/ClassComponentVersion'

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
