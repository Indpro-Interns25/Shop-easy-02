import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/LoginPage.jsx';
import Register from './components/RegisterPage.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter> 
    <Navbar/>
    <h1>Hello world</h1>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
