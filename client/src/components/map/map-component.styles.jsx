import styled from 'styled-components';
import { Tooltip } from 'react-leaflet';



export const StyledTooltip = styled(Tooltip)`   
    .leaflet-popup-content-wrapper {
        border-radius: 0;
    }

    .leaflet-popup-tip-container {
        visibility: hidden;
    }
    border: 2px solid black;
    border-radius: 10px;
    position: absolute;
    background: #646464;
    font-family: arial;
    font-size: 12px;
    text-shadow: 0px 1px 1px #000;
    color: #ffc64a;
    text-align: center;
`;