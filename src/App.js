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
    enter: {
        y: 0,
        opacity: 1,
        transition: {
            y: { type: 'spring', delay: 100, duration: 100 },
            default: { duration: 100 }
        }
    },
    exit: {
        y: 10,
        opacity: 0,
        transition: {
            duration: 100
        }
    }
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
