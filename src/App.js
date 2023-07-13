
import {Switch, Route } from 'react-router';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Taskbar from './Components/Taskbar/Taskbar';


import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


function App() {
  return (
    <div className="App">
      
    <Taskbar/>
    

    <Switch>
      <Route exact path="/"><Home/>  </Route>
      <Route path="/About" > <About/></Route>
      <Route path="/Contact"> 
      <div className="Contact">
      <h1> Contact page in progess!!</h1>
      <CircularIndeterminate/>

      </div>
      </Route>

    </Switch>


    </div>
  );
}

export default App;


function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}