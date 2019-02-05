import React from 'react';
import {Route, Switch} from 'react-router-dom';
import styled from "styled-components";
import posed, {PoseGroup} from 'react-pose';
import './App.css';

import NewsList from "./Containers/NewsList";
import {rem} from "polished";
import NewsDetails from "./Containers/NewsDetails";
import Header from "./Containers/Header";

const AppWrapper = styled.div`
  margin: 0 auto;
  max-width: ${rem(500)};
  min-height: 100vh;
  background-color: #fff;
`;

const RoutesContainer = posed.div({
    enter: {opacity: 1, scale: 1, delay: 100},
    exit: {opacity: 0, scale: 0.99}
});

const App = () => (
    <Route
        render={({location}) => (
            <AppWrapper>
                <Header/>
                <PoseGroup>
                    <RoutesContainer key={location.pathname}>
                        <Switch location={location}>
                            <Route exact path="/" component={NewsList} key="home"/>
                            <Route path="/article/:postId" component={NewsDetails} key="newsDetail"/>
                        </Switch>
                    </RoutesContainer>
                </PoseGroup>
            </AppWrapper>
        )}
    />
);

export default App;
