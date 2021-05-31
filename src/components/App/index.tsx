import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from '../Navbar'
import PageRouter from '../PageRouter'


function App() {
  return (
    <div className="App">
      <>
      <Navbar />
      <PageRouter />
      </>
      
    </div>
  );
}

export default App;
