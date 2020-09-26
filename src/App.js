import React from 'react';
import { Navbar, NavbarBrand } from "shards-react";
import './App.css';

import LinkAdd from './LinkAdd';

function App() {
  return (
    <div className="App">
      <Navbar type="dark" theme="primary" expand="md">
        <NavbarBrand >Youtube Link App</NavbarBrand>
      </Navbar>
      <LinkAdd/>
    </div>
  );
}

export default App;
