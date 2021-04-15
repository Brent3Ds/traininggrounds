import {useState} from "react"


const InputBox = () => {
    const [InputText,setInputText] = useState("")
    const [Show,setShow] = useState(false)
    const onChange = (e) => {
        setInputText(e.target.value)
    }
    return <div>
        <input type="text"  value={InputText} placeholder="type anything" onChange={onChange}/>
        <button onClick = {() => setShow(!Show)}>Show</button>
        {Show === true ?InputText:null}
    </div>
}


export default InputBox;