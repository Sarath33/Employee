import { Button, Card, CardContent, IconButton, Paper, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import { ListGroup } from 'react-bootstrap';
import Home from './home';
import Nav from './components/nav';
import './components/employee.css';
export default function Employee()
{
    const point = JSON.parse(localStorage.getItem("entries"));
    let profile = null;
   const[sh,setsh] = useState(null);
   const[open,setOpen] = useState(false);
   useEffect(()=>{
    let k = localStorage.getItem("opener")
    if(k == "open")
    setOpen(true);
     
   })
    const get = (id)=>{
        profile =   point.filter(it=>{
                 if(it.id === id)
                 return it;
        })
        let k = (<div>
            <Card style={{ width: '18rem' }}>
                <h2>{profile[0].name}</h2>
             <ListGroup variant="flush">
             <ListGroup.Item>{profile[0].email}</ListGroup.Item>
            <ListGroup.Item>{profile[0].contact}</ListGroup.Item>
            <ListGroup.Item>{profile[0].gender}</ListGroup.Item>
            <ListGroup.Item>{profile[0].category}</ListGroup.Item>
            </ListGroup>
            
            </Card>
            
           <Link to={`/edit/${profile[0].id}`} ><Button  variant="contained" color="primary">Edit</Button></Link>
            <Button  onClick={()=>{
                    deleter(profile[0].id)
            }}  variant="contained" color="secondary">Delete</Button>
        </div>)
        setsh(k);
        
     }
   
     console.log('rendering');
     const deleter = (e)=>{
       let dum = point.filter(it =>{
           if(it.id !== e)return it;
        })
       localStorage.setItem("entries",JSON.stringify(dum));
       localStorage.setItem("opener","open");
      window.location.reload();
     }
     
    const k = point.map(it=>(
        <Card  variant="outlined">
        <CardContent className="content">
          <Typography className="name" color="textSecondary" gutterBottom>
            {it.name}
            
           
          </Typography>
          <div className="butto">
          <Button  onClick={()=>{get(it.id)}} name={it.id} variant="outlined" color="secondary">
              View Details
            </Button>
            </div>
        </CardContent>
        </Card>
    ))
    return(
        <div>
         <Nav />
         {open?<Alert action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                localStorage.setItem("opener","");
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Profile deleted
        </Alert>:null}
            <h1>Employee</h1>
            <Paper elevation={3} className="paper">
            {k}
            
            </Paper>
           <div className="profile">
            {sh}
            </div>
            
        </div>
    )
}