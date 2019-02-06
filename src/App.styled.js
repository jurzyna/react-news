import styled from "styled-components";
import {rem} from "polished";
import posed from "react-pose";

export const AppWrapper = styled.div`
  margin: 0 auto;
  max-width: ${rem(500)};
  min-height: 100vh;
  background-color: #fff;
`;

export const RoutesContainer = posed.div({
    enter: {
        y: 0,
        opacity: 1,
        transition: {
            y: { type: 'spring', delay: 100, duration: 100 },
            default: { duration: 100 }
        }
    },
    exit: {
        y: 10,
        opacity: 0,
        transition: {
            duration: 100
        }
    }
});
