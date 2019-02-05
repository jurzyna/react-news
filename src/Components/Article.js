import React from 'react';
import {
    withRouter
} from 'react-router-dom';
import PropTypes from 'prop-types';
import ArticleImage from "./ArticleImage";
import {H1, H3} from "./Heading";
import {ArticleMeta, ArticleStyled} from "./Article.styles";


class Article extends React.Component {

    openDetails = () => {
        this.props.history.push(`/article/${this.props.index}`)
    };

    render() {
        const {urlToImage, title, source} = this.props.article;
        return (
            <ArticleStyled onClick={this.openDetails}>
                <ArticleImage urlToImage={urlToImage}/>
                <ArticleMeta>
                    <H3>{source.name}</H3>
                    <H1>{title}</H1>
                </ArticleMeta>
            </ArticleStyled>
        );
    }
}

// export default Article;
export default withRouter(Article)


Article.propTypes = {
    article: PropTypes.shape({
        source: PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string
        }),
        author: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string,
        urlToImage: PropTypes.string,
        publishedAt: PropTypes.string,
        content: PropTypes.string,
        uuid: PropTypes.string
    })
};
