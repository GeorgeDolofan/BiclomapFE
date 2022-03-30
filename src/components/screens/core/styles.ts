import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-template-rows: 1fr 5rem;
  min-height: 100vh;
  color: whitesmoke;
  background-image: radial-gradient(
      circle 5px at top left,
      rgba(226, 226, 226, 0.1) 0%,
      rgba(226, 226, 226, 0.1) 50%,
      rgba(201, 201, 201, 0.1) 50%,
      rgba(201, 201, 201, 0.1) 30%,
      transparent 30%,
      transparent 50%
    ),
    linear-gradient(90deg, rgba(51, 51, 51, 0.88), rgba(51, 51, 51, 0.88));
  background-size: 11px 11px;
`;
