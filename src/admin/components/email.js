import { TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import {Former} from '../form-context';
export default function Email()
{
    const[emailr,setemail] = useState("");
    const {formy,email} = useContext(Former);
      if(formy)
      {
          email(emailr);
          
      }
    return(
        <TextField type="Email" value={emailr} onChange={(e)=> setemail(e.target.value)}id="standard-basic" label="Email" required/>
        
    )
}