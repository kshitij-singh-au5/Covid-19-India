import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import CovidApp from "./components/CovidApp";


class App extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    
    return (
      
        <div className="root">
          <div className="mainContent">
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <CovidApp
                  />
                )}
              />
              
            </Switch>
          </div>
        </div>
      
    );
  }
}

export default App;
