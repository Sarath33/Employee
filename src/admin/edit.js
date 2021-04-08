import React, {  useEffect, useState } from "react";
import { Button, Form, Select } from "react-bootstrap";
import { IconButton} from '@material-ui/core';

import Nav from './components/nav';
import queryString from 'query-string';
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import {
  BrowserRouter as Router,
  Link,
  useLocation,
  useParams
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { Checkbox, InputLabel, MenuItem, Paper, TextField } from "@material-ui/core";
import "./home.css";


export default function Edit(props) {
  const[check,setcheck] = useState(false);
  const[check1,setcheck1] = useState(false);
  const[open,setOpen] = useState(false);
  let {id} =  useParams();

useEffect(()=>{

  if(check == false && check1 == false)
  make();
})

const make =()=> ( 
  profile[0].gender == "Male"?setcheck(true):setcheck1(true)
)


const point = JSON.parse(localStorage.getItem("entries"));
let profile = point.filter(it=>{
    if(it.id === id ){
     
    return it;
    };
});

const[detail,setdetail] = useState({...profile[0]});
  
  

    
   
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
   
 const ff = ()=>{
  <Link to="/display" />
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
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Profile updated
        </Alert>:null}
    <div style={{paddingTop: 50}}>
    <Link to="/display" ><Button >Back</Button></Link>
    </div>
      <Paper style={{marginTop: 0}} elevation={3} className="root">
   
    
        <h1>update details</h1>
        <div className="row">
          <h3>Name: </h3>
          <TextField type="text"  onChange={handle} value={detail.name} name="name" required/>
         </div>
        <div className="row">
          <h3>Email: </h3>
          <TextField type="Email" onChange={handle}  id="standard-basic" value={detail.email} name="email" required/>
      
        </div>
        <div className="row">
          <h3>Contact: </h3>
          <TextField type="contact"  onChange={handle} id="standard-basic" value={detail.contact} name="contact" required/>
        </div>
        <div className="row">
          <h3>Category: </h3>
          <Form.Control  as="select" onChange={handle} name="category" value={detail.category} custom style={{width: 180,height:50}}> 
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </Form.Control>
        </div>
        <div className="gender row" >
             <h3>Gender: {make}</h3>
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

      <Button onClick={()=>{setOpen(true);
          let pp =  point.map(it=>{
            if(it.id == id)
            return detail;
            else
            return it;
            
          });
          localStorage.setItem("entries",JSON.stringify(pp));
          
        }} type="submit" >update</Button>
        
      </Paper>
    
   
    </div>
  );
}


