import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {PoseGroup} from 'react-pose';
import './App.css';
import NewsList from "./Containers/NewsList";
import NewsDetails from "./Containers/NewsDetails";
import Header from "./Containers/Header";
import {AppWrapper, RoutesContainer} from "./App.styled";

const App = () => (
    <Route
        render={({location, history, match}) => (
            <AppWrapper>
                <Header match={match} history={history}/>
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
