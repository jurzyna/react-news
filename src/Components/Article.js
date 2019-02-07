import React from 'react';
import {
    withRouter
} from 'react-router-dom';
import PropTypes from 'prop-types';
import ArticleImageStyled from "./StyledComponents/ArticleImage.styled";
import {H1, H2} from "./StyledComponents/Heading.styled";
import {ArticleMeta, ArticleStyled} from "./StyledComponents/Article.styled";

class Article extends React.Component {

    openDetails = () => {
        this.props.history.push(`/article/${this.props.index}`)
    };

    render() {
        const {urlToImage, title, source} = this.props.article;
        return (
            <ArticleStyled onClick={this.openDetails}>
                <ArticleImageStyled urlToImage={urlToImage}/>
                <ArticleMeta>
                    <H2>{source.name}</H2>
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
    }).isRequired
};
