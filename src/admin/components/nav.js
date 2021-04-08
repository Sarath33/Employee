import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import {Link} from 'react-router-dom';

import React from 'react';

export default function Nav()
{
    return(
        <AppBar position="static">
        <Toolbar variant="dense">
         
          <Typography variant="h6" color="inherit">
            Employee Adder  
          </Typography>
          <Link to="/display"><Button  variant="contained" color="primary">View Details</Button></Link> 
          <Link to="/"><Button  variant="contained" color="primary">Add employee</Button></Link> 
        </Toolbar>
      </AppBar>
    )
}
