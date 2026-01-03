import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/theme/theme";
import { GlobalStyle } from "./GlobalStyle";

import IndexPage from "./Pages";
import TechNewsPage from "./Pages/techNews";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route exact path="/tech-news" component={TechNewsPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
