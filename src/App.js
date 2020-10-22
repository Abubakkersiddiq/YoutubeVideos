import React from 'react';
import './App.css';
import Overview from './Overview';
import Intro from './Intro';
import SavedLinks from './SavedLinks';
import MenuHeader from './Menu';
import {Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <MenuHeader/>
    <Switch>
    <Route exact path="/YoutubeLink">
      <Overview/>
    </Route>
    <Route path="/SavedLinks">
    <SavedLinks/>
    </Route>
    <Route path="/">
      <Intro/>
    </Route>
    </Switch>
    </div>
  );
}

export default App;
