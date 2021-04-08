import React, { useContext, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Checkbox } from '@material-ui/core';
import {Former} from '../form-context';
function Gender()
{
    const{formy,Gender} = useContext(Former);
    const[check,setcheck] = useState(true);
    const[check1,setcheck1] = useState(false);
        if(formy)
       {
           if(check)
          Gender("male");
           else
           Gender("female");
       }
    return(
        <div style={{display: 'flex',justifyContent:'left'}}>
             <Checkbox onChange={()=>{
                 if(check1){setcheck1(false)}
                 setcheck(!check)

             }} checked={check} style={{padding: 0}}
            color="primary"/><h5>male</h5>
            <Checkbox  onChange={()=>{
                 if(check){setcheck(false)}
                 setcheck1(!check1)

             }}checked={check1}name="checkedB"
            color="primary"/><h5>Female</h5>
        </div>
    )
}
export default Gender;