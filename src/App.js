import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NewsList from "./Containers/NewsList";
import NewsDetails from "./Containers/NewsDetails";
import styled from "styled-components";
import {rem} from "polished";

const AppWrapper = styled.div`
  margin: 0 auto;
  max-width: ${rem(500)};
  min-height: 100vh;
  background-color: #fff;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={NewsList}/>
            <Route path="/article/:postId" component={NewsDetails}/>
          </Switch>
        </BrowserRouter>
      </AppWrapper>
    );
  }
}

export default App;
