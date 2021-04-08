import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import {Former} from '../form-context';
export default function Category(props)
{
    const[option,setoption] = useState("1");
     const{formy,Category} = useContext(Former);
     if(formy)
      {
          Category(option);
      }
    return(
        <Form.Control onChange={(e)=>{
           setoption(e.target.value)
        }} as="select" custom style={{width: 180,height:50}}> 
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </Form.Control>
    )
}