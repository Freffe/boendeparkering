import React from 'react';
import { connect } from 'react-redux'; 

import CustomButton from '../custom-button/custom-button.component';
import { StyledPositionButton } from './position-component.styles';
import { userDataFetchStart } from '../../redux/data/user/userdata.actions';

const Position = ({ userDataFetchStart }) => {

    const handleSubmit = async event => {
        // On submit from button called, get user Data position and fire dispatch to update userPosition state.
        if ("geolocation" in navigator) {
            //console.log("Available");
            // Dispatch
            userDataFetchStart();
          } else {
            //console.log("Not Available");
            // Message
        }
        // If position dispatch latitude longitude to update map.    
      
    }

    return (
        // Render button with map icon and read if clicked.
        <CustomButton type='submit' onClick={handleSubmit} style={{ float: "right", marginLeft: "-54px", position: "absolute"}}>
                <StyledPositionButton />
        </CustomButton>
    );
}

const mapDispatchToProps = dispatch => ({
    userDataFetchStart: () => dispatch(userDataFetchStart())
});

export default connect(null, mapDispatchToProps)(Position);