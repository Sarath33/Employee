import { TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import {Former} from '../form-context';
export default function Name()
{
    const[namer,setname] = useState("");
    const {formy,setformy, name} = useContext(Former);
    
     if(formy)
     {console.log("hiifromname");
             name(namer);
             
            setformy(false);
            
     }
    return(
        <TextField type="text" value={namer} onChange={(e)=> setname(e.target.value)} id="standard-basic" label="Name" required/>
        
    )
}