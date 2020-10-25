import styled from 'styled-components';
import { Go } from '../Icon/adressGo';
import { Search } from '../Icon/searchIcon';


export const SearchAdressContainer = styled.div`
  position: relative;
  float: left;
  padding-right: 80px;
  margin: 0;
  height: 81px;
  width: 191px;
`;

export const SearchTitle = styled.h2`
  margin: 0 0;
`;

export const FormField = styled.form`
`;

export const StyledGoButton = styled(Go)`
    width: 20px; 
    height: 20px;
    top: 0;
    padding: 0px;
    cursor: pointer;
    transition: color .3s;
    &:hover {
        color: #5eb2ff;

    }

`;

export const StyledSearchButton = styled(Search)`
    width: 20px; 
    height: 20px;
    top: 0;
    padding: 0px;
    cursor: pointer;
    transition: color .3s;
    &:hover {
        color: #5eb2ff;

    }

`;

export const StyledMessageField = styled.div`
    border: 2px solid black;
    border-radius: 2px;
    position: absolute;
    background: #646464;
    font-family: arial;
    font-style: italic;
    font-size: 12px;
    text-shadow: 0px 1px 1px #000;
    color: #ffc64a;
    text-align: center;
    margin: 0px;
    padding: 0px;
    animation: FadeAnimation 1s ease-in 1.8s forwards;
    @keyframes FadeAnimation {
    0% {
      opacity: 1;
      visibility: visible;
    }

    100% {
      opacity: 0;
      visibility: hidden;
    }
  }
`;

export const StyledMessageErrorField = styled.div`
    border: 2px solid black;
    border-radius: 2px;
    position: absolute;
    background: #646464;
    font-family: arial;
    font-style: italic;
    font-size: 14px;
    color: red;
    text-align: center;
    margin: 0px;
    padding: 0px;
    animation: FadeAnimation 1s ease-in 1.8s forwards;
    @keyframes FadeAnimation {
    0% {
      opacity: 1;
      visibility: visible;
    }
  }
`;