import Nav from "./components/Nav"
import {useState} from "react"
import InputBox from "./components/InputBox"


const App = () => {
  const [count, setCount] = useState(0);
  return<div style={{margin:0}} >
    <Nav />
    <p style={{margin:"auto"}}>
      Hello World
    </p>
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>

  <InputBox/>

  </div>
}

export default App;