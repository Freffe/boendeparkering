import React from 'react';
import { connect } from 'react-redux';
import { Map, Marker, TileLayer, Polyline } from 'react-leaflet';
import { selectMapData } from '../../redux/data/mapdata.selectors';
import { selectUserData } from '../../redux/data/user/userdata.selectors';
import { StyledTooltip } from './map-component.styles';
import { adressTimeConverter, adressTimeConverterToString, isAdressCurrentlyForbidden, helpFindCenter } from '../../helpers/mapHelpers';



const MapContainer = ({ mapData: {mapData}, userPositionData: { userPositionData }, userPositionData: {isUserPosition}}) => {
    return (
        <Map
            style={{ minHeight: "100vh", minWidth: "100vw", position: "relative", zIndex: "0"}}
            center={isUserPosition ? userPositionData : helpFindCenter(mapData)}
            zoom={16}
        >
            <TileLayer
                url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>
                contributors'
            />
            {mapData.data && mapData.data.map(street => {
                const startTime = adressTimeConverterToString(street.properties.START_TIME);
                const endTime = adressTimeConverterToString(street.properties.END_TIME);
                const startTimeHours = adressTimeConverter(street.properties.START_TIME);
                const endTimeHours = adressTimeConverter(street.properties.END_TIME);
                const dayHours = { day: street.properties.START_WEEKDAY, startHour: startTimeHours, endHour: endTimeHours };
                const isAdressForbidden = isAdressCurrentlyForbidden(dayHours);
                return (
                    <Polyline  
                        key={street.streetId} 
                        positions={[[street.geometry.coordinates[0][1], street.geometry.coordinates[0][0]], [street.geometry.coordinates[1][1], street.geometry.coordinates[1][0]] ]}
                        color={isAdressForbidden ? 'red' : 'green'}
                    >
                        <StyledTooltip>
                                <h3>
                                    {street.properties.ADDRESS}
                                </h3>
                                <p>Servicedag: {street.properties.START_WEEKDAY.charAt(0).toUpperCase() + street.properties.START_WEEKDAY.slice(1)}</p>
                                <p>Förbjuden parkering: {startTime + " - " + endTime} </p>
                        </StyledTooltip>
                    </Polyline>
                )
            }
            )}
            {userPositionData.length && <Marker position={userPositionData} ><StyledTooltip><h3>You are here</h3></StyledTooltip></Marker>}
        </Map>
    );
}
const mapStateToProps = (state) => ({
    mapData: selectMapData(state),
    userPositionData: selectUserData(state),
});

export default connect(mapStateToProps)(MapContainer);