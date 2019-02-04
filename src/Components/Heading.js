import styled, { css } from 'styled-components';
import { rem } from 'polished';

// Define new const with bold style
const headingStyle = css`
  font-weight: 600;
  text-align: left;
  line-height: 1.2;
  color: rgba(0,0,0,.84);
`;

export const H1 = styled.h1`
  margin: ${rem(10)} 0 0;
  font-size: ${rem(21)};
  ${headingStyle};
`;

export const H2 = styled.h2`
  font-size: ${rem(16)};
  ${headingStyle};
`;

export const H3 = styled.h3`
  margin: 0;
  font-size: ${rem(16)};
  text-transform: uppercase;
  ${headingStyle};
`;
