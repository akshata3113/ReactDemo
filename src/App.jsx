import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { remove } from '@vue/shared'

function App() {

  let [counter,setCounter]=useState(15)

  // let counter = 15

  const addValue=()=>{
    
    // counter=counter+1
    setCounter(counter+1)
  }
    const removeValue=()=>{
     setCounter(counter-1)
      
      
    }
  
  return (
    <>
  
      <h1>React project</h1>
      <h2>Counter value:{counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>
      <br/>
      <button
      onClick={removeValue}
      >remove Value</button>
    </>
  )
}

export default App