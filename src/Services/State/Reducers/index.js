import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk'
import PostsReducer from './posts.reducer';

const rootReducer = combineReducers({
    posts: PostsReducer
});

const composeEnhancers = composeWithDevTools({});

export default createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunkMiddleware)
    )
);
