import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate()
  let clearUser=()=>{
    localStorage.removeItem("token")
    navigate('/')
  }
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
   <AppBar position="static">
     <Toolbar>
       <IconButton
         size="large"
         edge="start"
         color="#00000"
         aria-label="menu"
         sx={{ mr: 2 }}
       >
         {/* <MenuIcon /> */}
       </IconButton>
       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         Course
       </Typography>

       <Link to="/home"><Button variant="contained" >Home</Button></Link>
       <Link to="/add"><Button  variant="contained" >Add</Button></Link>
       <Button  variant="contained" onClick={clearUser} >Logout</Button>
       {/* <Button color="inherit" onClick={()=>navigate('/')}>Home</Button>
       <Button color="inherit" onClick={()=>navigate('/add')}>Add</Button> */}
     </Toolbar>
   </AppBar>
 </Box>
 <br />
  </>
  )
}

export default Navbar