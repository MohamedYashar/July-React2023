import React from "react";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import  './About.css'









export default function About () {

    return (

      <div className="container-About">

<div className="container-About">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h1>About Me : </h1></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div class="accordion-body">
                    <h2> I like working with new Tools and Technologies.</h2>
                    <div class="accordion-body-1"> 
                      <h3>Name :  Mohamed Yashar</h3>
                      <h3>Email:  Yashar93official@gmail.com </h3>
                      <h3>City :   Bangalore</h3>
                      <h3>Country:  India</h3>

                      
                        

                      <a class=" container-3  " aria-current="page" aria-label="Download CV" 
                      href=" https://drive.google.com/file/d/1indJ44M9gGDyMEwAqVDK7sYjs-rZS-xo/view?usp=sharing" target="_blank">
                        Click here to view and Download CV</a>
                                                                                                 
  
                    </div>
  
                    
                 </div>
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography> <h1> Experience : </h1></Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
        



<BasicTable/>


          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h1 >Education :</h1></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          
            <div >
                <h2> Mahendra Institute of Engineering and Technology </h2>
                <h3> Bachelor of Engineering</h3>
                <h4> March 2010 - April 2014</h4>
            </div>



          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h1 >Skills Acquired :</h1></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          
            <div class="container-1">
                <div ><img class="container-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZQEO-lCffJlch5n9TVZ34BYYoDNFQ9LUkqf1V9V64lA&s" alt = "JavaScript" title="JavaScript"/></div>
                <div ><img  class="container-1"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV1BsdkcUG2xRnSC_OngNEuKSk7ZzVmOJlBM7EhzoUKg&s" alt = "NodeJS"  title="NodeJs"/></div>
                <div ><img class="container-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVm8bfeIkMuMduGdsb96a0X8Aq4MTfwRQTbi5K0PqOlg&s" alt = "ReactJs" title="ReactJs"/></div>
                <div ><img class="container-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWYZQGijs7beOCmR6VSn2X-cY2IkMUUqAheedWMhdpAw&s" alt = "HTML" title="HTML"/></div>
                <div ><img class="container-1"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/1200px-CSS.3.svg.png" alt = "CSS" title="CSS"/></div>
                <div ><img class="container-1" src="https://w7.pngwing.com/pngs/804/269/png-transparent-bootstrap-hd-logo-thumbnail.png" alt = "Bootstrap"  title="Bootstrap"/></div>
                <div ><img class="container-1"src="https://static.javatpoint.com/mongodb/images/mongodb-tutorial.jpg" alt = "Mongo DB" title="Mongo DB"/></div>
            </div>



          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
      </div>

        
    )
}



function createData(SlNo, CompanyName, Designation, PeroidOfStay) {
  return { SlNo, CompanyName, Designation, PeroidOfStay };
}

const rows = [
  createData(1, 'InterGlobe Aviation Ltd', 'Customer Support Executive', 'FEB 2015 –AUG 2019', ),
  createData(2,'Hiveloop Technology Pvt Ltd', 'Customer Support Executive', 'SEP 2020 – MAY 2021'),
  createData(3, 'Infosys Bpm Pvt Ltd', 'Senior Process Executive', 'JUN 2021 – OCT 2021', )
];



 function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" >SL.NO</TableCell>
            <TableCell align="center">Company Name</TableCell> 
            <TableCell align="center">Designation</TableCell>
            <TableCell align="center">Period of Job</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.SlNo}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">     {row.SlNo}  </TableCell>
              <TableCell align="center">{row.CompanyName}</TableCell>
              <TableCell align="center">{row.Designation}</TableCell>
              <TableCell align="center">{row.PeroidOfStay}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
