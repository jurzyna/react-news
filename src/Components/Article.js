import React from 'react'
import styled from 'styled-components';

const ArticleUnstyled = styled.div`
  width: 50%;
  margin: 20px;
  color: ${props => props.color || 'red'}
`;

const Article = ({ props }) => (
    <React.Fragment>
        <ArticleUnstyled>
            Hello
        </ArticleUnstyled>
    </React.Fragment>
);
export default Article;
