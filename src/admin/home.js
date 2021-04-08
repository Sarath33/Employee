import React, {  useEffect, useState } from "react";
import Nav from './components/nav';
import Alert from '@material-ui/lab/Alert';
import { IconButton} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { v4 as uuidv4 } from 'uuid';
import { Button, Form, Select } from "react-bootstrap";


import "bootstrap/dist/css/bootstrap.min.css";

import { Checkbox, InputLabel, MenuItem, Paper, TextField } from "@material-ui/core";
import "./home.css";
import Gender from './components/gender';
function Home(props) {
  const[check,setcheck] = useState(true);
  const[check1,setcheck1] = useState(false);
  const[open,setOpen] = useState(false);
const[detail,setdetail] = useState({category:"1",gender: check?"Male":"Female"});
//const lengther = JSON.parse(localStorage.getItem("entries"));
   useEffect(()=>{
    let k = localStorage.getItem("opener")
    if(k == "open")
    setOpen(true);
     
   })
const handle = (e)=>{
  if(e.target.name == "gender")
  {
    e.target.value = check?"Female":"Male";
    console.log(e.target.value);
  }
         setdetail(detail =>(
           ({...detail,[e.target.name] : e.target.value})
         ))
       
    }
 
  return (
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
          Profile updated
        </Alert>:null}
      <Paper elevation={3} className="root">
     <form onSubmit={(e)=>{
       // e.preventDefault();
        const k = {...detail,id:uuidv4()}
        
        setdetail(k);
        let it = JSON.parse(localStorage.getItem("entries"));
        if(it){
         
        it = it.concat(k);console.log(it);
        localStorage.setItem("entries",JSON.stringify(it));
        localStorage.setItem("opener","open");
        setOpen(true);
        }
        else{
          localStorage.setItem("entries",JSON.stringify([{id:uuidv4(),...detail}]));
          let it = JSON.parse(localStorage.getItem("entries"));
         
          
        localStorage.setItem("entries",JSON.stringify(it));
        }
      }}>
        <h1>Add Employee Details</h1>
        <div className="row">
          <h3>Name: </h3>
          <TextField type="text"  onChange={handle} value={detail.name} name="name" required/>
         </div>
        <div className="row">
          <h3>Email: </h3>
          <TextField type="Email" onChange={handle}  value={detail.email}  id="standard-basic" name="email" required/>
      
        </div>
        <div className="row">
          <h3>Contact: </h3>
          <TextField type="contact"  onChange={handle} value={detail.contact} id="standard-basic" name="contact" required/>
        </div>
        <div className="row">
          <h3>Category: </h3>
          <Form.Control  as="select" onChange={handle} name="category" custom style={{width: 180,height:50}}> 
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </Form.Control>
        </div>
        <div className="gender row">
             <h3>Gender: </h3>
             <div style={{display: 'flex',justifyContent:'left'}}>
             <Checkbox name = "gender" onChange={(e)=>{
                 if(check1){setcheck1(!check1)}
                 setcheck(!check);handle(e)
               
             }} checked={check}  style={{padding: 0}}
            color="primary"/><h5>male</h5>
            <Checkbox name="gender" onChange={(e)=>{
                 if(check){setcheck(!check)}
                 setcheck1(!check1);handle(e)
                
             }} checked={check1}
            color="primary"/><h5>Female</h5>
            </div>
            
        </div>

        <Button  type="submit" >submit</Button>
        </form>
      </Paper>
    
    <h4>Employees added: </h4>
    </div>
  );
}

export default Home;
