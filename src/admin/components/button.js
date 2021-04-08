import React, { useContext } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button} from "react-bootstrap";
import {Former} from '../form-context';
export default function Button1(props)
{
    const {formy,setformy} = useContext(Former);
   
    return(
        <Button onClick={()=>{setformy(true)}} type="submit" >submit</Button>
    )
}