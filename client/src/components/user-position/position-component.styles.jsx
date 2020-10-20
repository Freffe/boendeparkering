import styled from 'styled-components';
import { Position } from '../Icon/userPositionIcon';

export const StyledPositionButton = styled(Position)`
    
    width: 24px; 
    height: 24px;
    top: 0;
    padding: 0px;
    cursor: pointer;
    transition: color .3s;
    &:hover {
        color: #5eb2ff;
    }
`;