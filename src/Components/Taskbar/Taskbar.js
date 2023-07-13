import React from "react";
import {useHistory} from 'react-router-dom'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


export default function Taskbar () {

    const history = useHistory();

    return (

        <AppBar position="static">
        <Toolbar>       
          
          <Button onClick={ ()=> history.push("/") } color="inherit">Home</Button>
          <Button onClick={ ()=> history.push("/About") } color="inherit">About </Button>
          <Button onClick={ ()=> history.push("/Contact")} color="inherit">Contact </Button>

        </Toolbar>
      </AppBar>

        
    )
}