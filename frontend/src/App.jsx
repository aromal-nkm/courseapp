import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { Routes, Route, useNavigate, Link } from 'react-router-dom'
import Home from './components/Home';
import Add from './components/Add';
import Login from './components/Login';
import PrivateRoutes from './components/PrivateRoutes';
function App() {
  const [count, setCount] = useState(0)
  // const navigate = useNavigate()
  return (
    <>
       
    <br />

    <Routes>
      <Route path="/" element={<Login/>} />
      <Route  element={<PrivateRoutes/>} >
      <Route path="/home" element={<Home />} />
      <Route path="/add" element={<Add />} />
      </Route>
    </Routes>
    </>
  )
}

export default App