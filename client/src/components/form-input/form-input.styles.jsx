import styled, { css } from 'styled-components';

const mainColor = 'black';

const shrinkLabelStyles = css`
  font-size: 12px;
  opacity: 0;
  color: ${mainColor};
`;

export const GroupContainer = styled.div`
  position: relative;
  padding-right: 40px;
`;

export const FormInputContainer = styled.input`
  margin-left: 40px;
  transition: all .35s ease-in;
  background: none;
  width: 0px;
  height: 41px;
  margin-top: 10px;
  border: 0;
  border-color: white;
  border-radius: 0;
  box-sizing: border-box;
  box-shadow: none;
  position: absolute;
  &:focus {
    outline: none;
    width: 140px;
    height: 41px;
    background: none;
    box-sizing: border-box;
    background-color: white;
    font-size: 16px;
    border-top: 1px solid ${mainColor};
    border-bottom: 1px solid ${mainColor};
    color: ${mainColor};
    border: 1px solid ${mainColor};
    cursor: pointer;
    text-indent: 10px;
  }
  &:focus ~ label {
    ${shrinkLabelStyles}
    visibility: visible;
  } 
`;

export const FormInputLabel = styled.label`
  visibility: hidden;
  margin-left: 36px;
  color: ${mainColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  &.shrink {
    ${shrinkLabelStyles}
  } 
`;