import React from 'react';
import { Navbar, NavbarBrand } from "shards-react";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar type="dark" theme="primary" expand="md">
        <NavbarBrand >Youtube Link App</NavbarBrand>
      </Navbar>
    </div>
  );
}

export default App;
