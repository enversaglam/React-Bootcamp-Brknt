import { useEffect, useState } from "react"
import Button from "./components/Button"
import Text from "./components/Text"

function App() {
  const [name, setName] =useState("react")

  useEffect(() => {
    setTimeout(() => {
    setName('React Güncellendi...')
    }, 4000);
  },[])
  return (
    <>
      {
        name
      }
    </>
  )
}

export default App
