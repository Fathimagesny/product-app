import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Grid } from '@mui/material'
import View from './components/View'
import Add from './components/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
      <Navbar/>
      <br/>
       <Routes>
      <Route path='/' element={<View/>}></Route>
      <Route path='/Add' element={<Add/>}></Route>
     </Routes>
      
       
    </>
      )}


export default App
