import React, { Component } from 'react';
import {connect} from "react-redux";
import {getPostsThunk} from "../Services/State/Actions/posts.action";

class NewsList extends Component {
    render() {
        return (
            <h2>News List</h2>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts
});

const mapDispatch = dispatch => {
    dispatch(getPostsThunk());
    return {}
};

export default connect(mapStateToProps, mapDispatch)(NewsList);
