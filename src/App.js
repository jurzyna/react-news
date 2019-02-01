import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NewsList from "./Containers/NewsList";
import NewsDetails from "./Containers/NewsDetails";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={NewsList}/>
            <Route path="/:postId" component={NewsDetails}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
