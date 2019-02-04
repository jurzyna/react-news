import React, { Component } from 'react';
import {H3} from "../Components/Heading";
import {connect} from "react-redux";
import {getPostsThunk} from "../Services/State/Actions/posts.action";

class NewsDetails extends Component {
    render() {
        // TODO: should be done with a selector
        const post = this.props.posts.items[0];
        return (
            <H3>{ post
                    ? post.title
                    : 'Loading'}
            </H3>
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
export default connect(mapStateToProps, mapDispatch)(NewsDetails);
