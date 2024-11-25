import { useRef } from "react"


function App() {
  const inputRef = useRef(0);

  const focusFunc = () => {
    inputRef.current.focus();
    /* countRef.current++;
    console.log(countRef.current, "countRef") */
  }
  //const text = window.document.getElementById('text')
  //console.log(text, "text")

  return (
    <>
      <input type="text" ref={inputRef}/>
      <button onClick={focusFunc}>
        focus me !!!
      </button>
      {/* <div id="text">
        React useRef
      </div> */}
    </>
  )
}

export default App
