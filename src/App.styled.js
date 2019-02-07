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
        opacity: 1,
    },
    exit: {
        opacity: 0,
    }
});
