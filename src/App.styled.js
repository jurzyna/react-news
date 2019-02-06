import styled from "styled-components";
import {rem} from "polished";
import posed from "react-pose";

export const AppWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  height: calc(100vh - 50px);
  max-width: ${rem(500)};
  overflow: hidden scroll;
  background-color: #fff;
`;

export const RoutesContainer = posed.div({
    enter: {
        y: 0,
        opacity: 1,
        transition: {
            y: { type: 'spring', delay: 100, duration: 100 },
            default: { duration: 200 }
        }
    },
    exit: {
        y: 10,
        opacity: 0,
        transition: {
            duration: 200
        }
    }
});
