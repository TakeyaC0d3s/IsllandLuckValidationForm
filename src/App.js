import React from 'react';
import './App.css';
import Form from './Form';
import AnimatedDollarSign from "./video/animateddollarsign.mp4"


function App() {
  return (
    
    <div className='bg-image'
    style={{
      height: '100vh',
      overflow: 'hidden' 
    }}>
    
    <video autoPlay loop muted id="video">
    <source src={AnimatedDollarSign} type="video/mp4"/>
    </video>

    <div className="App">
     <Form />
    </div>
    </div>

    
  );
}

export default App;
