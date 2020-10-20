import styled, { css } from 'styled-components';

const buttonStyles = css`

  border: 1px solid black;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
const searchButtonStyles = css`

`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  } else if (props.isSearchButton) {
    return searchButtonStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  -moz-outline-style: none;
  outline-style: none;
  min-width: 40px;
  width: auto;
  height: 41px;
  letter-spacing: 0.5px;
  margin: 10px 0;
  font-size: 18px;
  padding-top: 4px;
  text-transform: uppercase;
  font-weight: bolder;
  opacity: 0.8;
  cursor: pointer;
  ${getButtonStyles} 
`;