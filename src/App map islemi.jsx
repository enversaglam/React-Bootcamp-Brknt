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
  const [name, setName] =useState(null)
  const [data, setData] =useState([])
  
  console.log(name, "name")

  const targetFunc = (e) => {
    setName(e.target.value)
  }

  const clickFunc = () => {
    setData(prev => ([...prev, name]))
  }

  console.log(data, "data")
  
  return (
    <>
      <input type="text" onChange={targetFunc}/>
      <button onClick={clickFunc}>Tikla</button>
      <div>
        {
          data.map((dt,i) => (
            <div key={i} >{dt}</div>
        ))
        }
      </div>
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
