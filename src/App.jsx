/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' */

import { useState } from "react"
import Button from "./components/Button"
import Text from "./components/Text"

function App() {
  // const [count, setCount] = useState(0)
  //props - kavrami
  //let name ="react"
  const [count, setCount] =useState(0)
  //const [degisken, degiskeni setlemek istedigin fonksiyon]

  const decrement = () => {
    if(count <= 0) return
    setCount(count -1)
    //setCount(prev => prev -1)
  }

  return (
    <>
      <Button name={"Azalt -"} onClick={() => setCount(count - 1)}/>
      <button onClick={decrement}>Azalt</button>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Arttir</button>
    </>
      /* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */
  )
}

export default App
