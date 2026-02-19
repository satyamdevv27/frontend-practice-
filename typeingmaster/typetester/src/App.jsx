import {  useState } from "react";
import data from "./paragraph.json"
function App() {
 const[difficulty ,setdifficulty] = useState("easy")
 const [passages ,setpassage] = useState("")
 const [userinp ,setuserinp] = useState("")

const generate_passage = ()=>{
 const filter = data.passages.filter((e)=>{
    return e.difficulty === difficulty
 })
 const random = Math.floor(Math.random() * filter.length)
 const randomepsg = filter[random].text;
 setpassage(randomepsg)
}
const characters = passages.split("")

 
  return (
    <>
      <h1>select you difficulty level </h1>
      <select 
      value={difficulty}
      onChange={(e)=>{setdifficulty(e.target.value)}}
      >
        <option value="easy">easy</option>
        <option value="medium">medium</option>
        <option value="hard">hard</option>
      </select>
      <button onClick={generate_passage}>submit</button>
      <div>
        {
        characters.map((e,i)=>{
          return <span key={i}>{e}</span>
        })
      }
      </div>
      <div>
        <input type="text" onChange={(e)=>{setuserinp(e.target.value)}} />
      </div>
  
    </>
  )
}

export default App
