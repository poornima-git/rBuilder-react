import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';


function Header() {
  const aboutUsContent = "AI Resume Builder is designed to help job seekers create professional, ATS-friendly resumes quickly and effortlessly. Our platform uses artificial intelligence to generate well-structured, personalized resumes based on your skills, experience, and career goals. Whether you're a student, a fresher, or an experienced professional, we make resume creation simple, fast, and effective—helping you stand out and increase your chances of landing your dream job"
  return (
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"#633823"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           <img width ={'40px'} src="https://www.codester.com/static/uploads/items/000/041/41164/icon.png" alt="icon"/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to = {'/'} className = 'text-light text-decoration-none' >AI rBuilder</Link>
          </Typography>
          <Tooltip title = {aboutUsContent}>
            <Button color="inherit">About Us</Button>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
