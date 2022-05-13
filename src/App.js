import React, {Component} from 'react';
import './App.scss';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import IndexPage from './Pages';
import TechNewsPage from './Pages/techNews';

class App extends Component {
  
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path = "/" component = {IndexPage}/>  
          <Route exact path = "/tech-news" component = {TechNewsPage}/>  
        </Switch>
      </Router>
    )
  }
}

export default App;
