import React, {Component} from 'react';
import {H2} from "../Components/Heading.styled";
import {connect} from "react-redux";
import {getPostsThunk} from "../Services/State/Actions/posts.action";
import {withRouter} from "react-router-dom";
import {NewsDetailsWrap} from "./NewsDetails.styles";

class NewsDetails extends Component {
    render() {
        // TODO: should be done with a selector
        const postId = this.props.match.params.postId;
        const post = this.props.posts.items[postId];
        return (
            <NewsDetailsWrap>
                <H2>{post
                    ? post.title
                    : 'Loading'}
                </H2>
            </NewsDetailsWrap>
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
export default connect(mapStateToProps, mapDispatch)(withRouter(NewsDetails));
