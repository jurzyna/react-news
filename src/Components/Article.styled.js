import styled from "styled-components";
import {rem} from "polished";

export const ArticleStyled = styled.div`
  color: ${props => props.color || 'red'};
  border-bottom:  ${rem(1)} solid #ececec;
  cursor: pointer;
  margin: 0 ${rem(20)} ${rem(20)} ${rem(20)};
`;

export const ArticleMeta = styled.div`
  padding: ${rem(20)} ${rem(20)};
  margin: 0 ${rem(-20)};
  transition: background-color .3s;
  &:hover{
      background-color: #ddd;
  }
`;
