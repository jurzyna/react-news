import React, {Component} from 'react';
import {H1} from "../Components/Heading.styled";
import {connect} from "react-redux";
import {getPostsThunk} from "../Services/State/Actions/posts.action";
import {withRouter} from "react-router-dom";
import {NewsDetailsContainer, NewsDetailsWrap} from "./NewsDetails.styles";
import ArticleDetailsImage from "../Components/ArticleDetailsImage";

class NewsDetails extends Component {
    renderDetails(post) {
        return (
            <NewsDetailsContainer>
                <ArticleDetailsImage urlToImage={post.urlToImage}/>
                <NewsDetailsWrap>
                    <H1>{post.title}</H1>
                    <p>{post.content}</p>
                </NewsDetailsWrap>
            </NewsDetailsContainer>
        )
    }

    render() {
        // TODO: should be done with a selector
        const postId = this.props.match.params.postId;
        const post = this.props.posts.items[postId];
        return (
            post
                ? this.renderDetails(post)
                : <p>Loading</p>
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
