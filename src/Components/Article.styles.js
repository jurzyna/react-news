import styled from "styled-components";
import {rem} from "polished";

export const ArticleStyled = styled.div`
  color: ${props => props.color || 'red'};
  border-bottom:  ${rem(1)} solid #ececec;
  cursor: pointer;
  transition: background-color .3s;
  &:hover{
    background-color: #ddd;
  }
`;

export const ArticleMeta = styled.div`
  padding: ${rem(20)};
`;
