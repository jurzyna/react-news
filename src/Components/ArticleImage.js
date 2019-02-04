import styled from 'styled-components';
import {rem} from 'polished';

const ArticleImage = styled.div`
  height: ${rem(200)};
  background-image: url(${props => props.urlToImage});
  background-size: cover;
  background-position: center;
`;
export default ArticleImage;
