import styled from 'styled-components';

export const BaseAnimation = styled.div`
  animation-duration: ${(props) => props.duration};
  animation-timing-function: ${(props) => props.timingFunction};
  animation-delay: ${(props) => props.delay};
  animation-iteration-count: ${(props) => props.iterationCount};
  animation-direction: ${(props) => props.direction};
  animation-fill-mode: ${(props) => props.fillMode};
  animation-play-state: ${(props) => props.playState};
  display: ${(props) => props.display};
`;

BaseAnimation.defaultProps = {
  // timingFunction: 'ease',
  delay: '0.1s',
  direction: 'normal',
  fillMode: 'both',
  // playState: 'running',
  display: 'block',
};
