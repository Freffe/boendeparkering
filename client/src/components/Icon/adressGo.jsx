import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const Svg = styled(Icon)`
    width: 14px;
    height: 14px;
    :hover {
        color: blue;
    }
`;

export const Go = ({ className, onClick }) => (
    <Svg viewBox="0 0 122.88 75.32" x="0px" y="0px" id="Layer_1" className={className} onClick={onClick}>
        <path 
            fill="currentColor" 
            d="M122.88,49.43L73.95,98.86V74.23C43.01,67.82,18.56,74.89,0,98.42c3.22-48.4,36.29-71.76,73.95-73.31l0-25.11 L122.88,49.43L122.88,49.43z"/>
    </Svg>

)