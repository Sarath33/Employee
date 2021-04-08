import { TextField } from '@material-ui/core';
import React, { useState ,useContext} from 'react';
import {Former} from '../form-context';
export default function Contact()
{
    const[contactr,setcontact] = useState("");
    const {formy,contact} = useContext(Former);
      if(formy)
      {
          contact(contactr);
   
      }
    return(
        <TextField type="contact"value={contactr} onChange={(e)=>{setcontact(e.target.value)}} id="standard-basic" label="contact" required/>
        
    )
}