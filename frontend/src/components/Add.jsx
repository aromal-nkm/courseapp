import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Navbar from './Navbar';
import { Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'
import axiosInstance from '../axiosinterceptor';
const Add = () => {
  const navigate = useNavigate()
  const [form, setForm]=useState({
    courseImageurl:'',
    courseId : '',
    courseName : '',
    courseCategory: '',
    courseDescription : '',
    courseDuration :'',
    courseFee:''
    


  })
  const onInputChange = (e) => {
    setForm({ ...form,[e.target.name]: e.target.value });
  };
  const location = useLocation()
  let sendData=()=>{
    if(location.state!= null){
      axiosInstance.put('http://localhost:3000/course/editCourse/'+location.state.course._id,form).then((res)=>{
        alert('Data updated');
        navigate('/home')
      }).catch((error)=>{
        console.log(error);
      })
    }
    else{
      axiosInstance.post('http://localhost:3000/course/add',form).then((res)=>{
        navigate('/home')
      }).catch((error)=>{
        console.log(error)
      })
    }
  }
  useEffect(()=>{
    if(location.state!=null){
      setForm({...form,
        courseImageurl:location.state.course.courseImageurl,
        courseId:location.state.course.courseId,
        courseName:location.state.course.courseName,
        courseCategory:location.state.course.courseCategory,
        courseDescription:location.state.course.courseDescription,
        courseDuration:location.state.course.courseDuration,
        courseFee:location.state.course.courseFee,

      })
    }
  },[])
  
  return (
    <>
    <Navbar/>
    <div>
       <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="imageurl" variant="outlined" name="courseImageurl" value={form.courseImageurl} onChange={onInputChange} /><br />
      <TextField id="outlined-basic" label="id" variant="outlined" name="courseId" value={form.courseId} onChange={onInputChange} /><br />
      <TextField id="outlined-basic" label="name" variant="outlined" name="courseName" value={form.courseName} onChange={onInputChange}/><br />
      <TextField id="outlined-basic" label="category" variant="outlined" name="courseCategory" value={form.courseCategory} onChange={onInputChange}/> <br />
      <TextField id="outlined-basic" label="description" variant="outlined" name="courseDescription"  value={form.courseDescription} onChange={onInputChange}/> <br />
      <TextField id="outlined-basic" label="duration" variant="outlined" name="courseDuration" value={form.courseDuration} onChange={onInputChange}/> <br />
      <TextField id="outlined-basic" label="fee" variant="outlined" name="courseFee" value={form.courseFee} onChange={onInputChange} /><br />
      <Button variant="contained" onClick={sendData}>Submit</Button>
      
    </Box>
    </div>
    </>
  )
}

export default Add