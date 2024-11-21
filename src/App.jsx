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
  const [name, setName] =useState("react")
  //const [degisken, degiskeni setlemek istedigin fonksiyon]

  const clickFunc = () => {
    console.log("click islemi yapildi...")
    setName("react degisti ...")
  }

  return (
    <>
    <Text number={"1"} name={"React"}/>
    <Text number={"2"} name={"Reactt"}/>
    <Text number={"3"} name={"Reacttt"}/>
    <Button name={"Arttir"}/>
    <Button name={"Azalt"}/>
    <div onClick={clickFunc}>
      {name}
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
