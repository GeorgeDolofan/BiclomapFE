import styled from 'styled-components';

export const Container = styled.nav`
  grid-area: navbar;
  display: grid;
  place-content: center;
  box-shadow: 0 -0.2rem 0.7rem 0.1rem hsl(0 0% 0% / 0.5);
  background-image: repeating-linear-gradient(
      67.5deg,
      hsla(127, 0%, 46%, 0.2) 0px,
      hsla(127, 0%, 46%, 0.2) 0px,
      transparent 0px,
      transparent 1px,
      hsla(127, 0%, 46%, 0.2) 1px,
      hsla(127, 0%, 46%, 0.2) 3px,
      transparent 3px,
      transparent 4px,
      hsla(127, 0%, 46%, 0.2) 4px,
      hsla(127, 0%, 46%, 0.2) 6px
    ),
    repeating-linear-gradient(
      0deg,
      hsla(127, 0%, 46%, 0.2) 0px,
      hsla(127, 0%, 46%, 0.2) 0px,
      transparent 0px,
      transparent 1px,
      hsla(127, 0%, 46%, 0.2) 1px,
      hsla(127, 0%, 46%, 0.2) 3px,
      transparent 3px,
      transparent 4px,
      hsla(127, 0%, 46%, 0.2) 4px,
      hsla(127, 0%, 46%, 0.2) 6px
    ),
    linear-gradient(0deg, rgb(23, 65, 23), rgb(23, 95, 23));
`;
