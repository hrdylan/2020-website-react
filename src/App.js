import React from 'react';
import logo from './logo.svg';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Title from './Title'
import MainView from './MainView'
import Header from './Header'
import Bios from './Bios'

const style = {
  backgroundColor: 'black'
}
function App() {
  return ( 
    <div style={style}>
      {/* <Bios/> */}
      <Header/>
      <MainView/>
    </div>
  )
}

export default App;
