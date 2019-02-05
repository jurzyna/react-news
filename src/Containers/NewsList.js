import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {getPostsThunk} from "../Services/State/Actions/posts.action";
import Article from "../Components/Article";

class NewsList extends Component {
    render() {
        const {posts} = this.props;
        return (
            <Fragment>
                {posts.loaded
                    ? posts.loaded && posts.items.length
                        ? posts.items.map((article, i) =>
                            <Article key={article.uuid} article={article} index={i}
                                     size={i === 0 ? 'hero' : 'standard'}/>
                        )
                        : <p>There are no Articles</p>
                    : <h4>Loader</h4>
                }
                {this.props.posts.loading}
            </Fragment>
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
