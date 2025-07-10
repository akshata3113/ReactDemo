import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
<<<<<<< HEAD
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
let myObj={
  username:"Rajat",
  age:21}


  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'> Tailwind test</h1>
     <Card username="Akshata" btnText="LearnMore"/>
     <Card username="Alice" btnText="LearnMore"/>
    </>
  )

}
export default App
=======
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
>>>>>>> 6b91229afaf2324cc6f468edfbb0b7e662012075
