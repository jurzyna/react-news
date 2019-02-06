import styled, { css } from 'styled-components';
import { rem } from 'polished';

// Define new const with bold style
const headingStyle = css`
  text-align: left;
  line-height: 1.4;
  color: rgba(0,0,0,.84);
`;

export const H1 = styled.h1`
  margin: ${rem(10)} 0 0;
  font-size: ${rem(21)};
  font-style: italic;
  font-weight: 900;
  ${headingStyle};
`;

export const H2 = styled.h2`
  margin: 0;
  font-family: var(--font-serif);
  font-size: ${rem(13)};
  text-transform: uppercase;
  ${headingStyle};
`;
