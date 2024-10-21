import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
import axios from 'axios'

const Login = () => {
    const [user, setUser] = useState({
        userName:'',
        password:''
    })
    const navigate = useNavigate()
    let updateUser=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
}
let validateUser=()=>{
  axios.post('http://localhost:3000/user/login',user).then((res)=>{
    console.log(res)
    alert(res.data.message)
    if(res.data.usertoken){
      localStorage.setItem("token",res.data.usertoken);
       navigate('/home')
    }
  })
//      if ((user.username=="admin" )&&(user.password=="123")) {
//         localStorage.setItem("username","admin"); //method to store value in variable
//         navigate('/home');

//     }
//      else alert("Invalid credentials")

 }
  return (
    <>
     <div>Welcome</div>
    <div>Login</div>
    <br />
    <TextField required id="outlined-required" label="Username" name="userName" value={user.userName} onChange={updateUser} />
    <br />
    <br />
    <TextField required id="outlined-required" label="Password" name="password" value={user.password} onChange={updateUser} />
    <br />
    <br />
    <Button variant="contained" onClick={validateUser}> Submit</Button> 
    </>

  )
}

export default Login