import styled from 'styled-components';

export const Container = styled.nav`
  grid-area: navbar;
  display: flex;
  align-items: center;
  justify-content: center;
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
export const Button = styled.button`


  background-color: #c2fbd7;
  border-radius: 100px;
  margin-left:2rem;
  margin-right:2rem;
  box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px;
  color: green;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;


&:hover {
  box-shadow: rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
}
`;
