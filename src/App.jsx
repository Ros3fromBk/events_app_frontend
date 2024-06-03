import { Routes,Route } from "react-router-dom";
import { useState } from 'react'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
// import Signup from './Pages/Signup'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
       <NavBar />
  <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/signup" element={<Signup />} /> */}

  </Routes>
    </div>
   
  )
}

export default App
