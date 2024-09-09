import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Newshead from './Components/Newshead'
import Newschannelname from './Components/Newschannelname'
import { useState } from "react"
// import Newscard from "./Components/Newscard"

function App() {
  const [catagory, setCatagory] = useState("general")


  return (
    <>
      <Newshead setCatagory={setCatagory}></Newshead>
      <Newschannelname catagory={catagory} ></Newschannelname>
      {/* <Newscard></Newscard> */}
    </>
  )
}

export default App
