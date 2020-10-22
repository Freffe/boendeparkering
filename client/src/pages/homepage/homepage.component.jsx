import React from 'react';

import ErrorBoundary from '../../components/error-boundary/errorBoundary.component';
import { HomePageContainer } from './homepage.styles';
import FetchAdress from '../../components/adress-search/fetchAdress.component';
import MapContainer from '../../components/map/map-component';
import Position from '../../components/user-position/position-component';

const HomePage = () => {
    return  (
        <HomePageContainer>
        {navigator.onLine ?
            <ErrorBoundary>
            <MapContainer styles={{position: "relative"}} />
                <div style={{ position: "absolute", marginLeft: "40px"}}>
                    <FetchAdress />
                    <Position />
                </div>
            </ErrorBoundary>  
            : 
            (<div>
                <p>
                    <h4>Missing an active internet connection. Please enable Wi-fi to use this feature.</h4>
                </p>
            </div>)
        }  
        </HomePageContainer>
    );
};

export default HomePage;