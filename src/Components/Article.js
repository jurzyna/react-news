import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ArticleImage from "./ArticleImage";
import {H1, H3} from "./Heading";
import { rem } from 'polished';

const ArticleStyled = styled.div`
  margin: 0 ${rem(20)};
  padding: ${rem(20)} 0;
  color: ${props => props.color || 'red'};
  border-bottom:  ${rem(1)} solid #ddd;
`;

const ArticleMeta= styled.div`
`;


const Article = props => {
    const {urlToImage, title, source} = props.article;
    return (
        <React.Fragment>
            <ArticleStyled>
                <ArticleImage urlToImage={urlToImage}/>
                <ArticleMeta>
                    <H3>{source.name}</H3>
                    <H1>{title}</H1>
                </ArticleMeta>
            </ArticleStyled>
        </React.Fragment>
    );
};

export default Article;

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
        content: PropTypes.string
    })
};
