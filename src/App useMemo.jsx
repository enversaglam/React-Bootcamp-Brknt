import { useMemo, useState } from "react"


function App() {
  const [count, setCount] = useState(0)
  const [textChange, setTextChange] = useState("")

  const largeDataFunc = useMemo(() => {
    [...new Array(1000000)].forEach((item) => { })

    return count * 3
  },[])

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>
        Arttir
      </button>
      {largeDataFunc}
      <input type="text" onChange={e => setTextChange(e.target.value)} />
      {/* <div id="text">
        React useRef
      </div> */}
    </>
  )
}

export default App
