import UserActionTypes from './userdata.types';

const INITIAL_STATE = {
    userPositionData: [],
    isUserPosition: false,
    error: null
}

const mapdataReducer = (state = INITIAL_STATE, action) => {
    //console.log("Called from within mapDataReducer");
    switch(action.type) {
        case UserActionTypes.FETCH_USER_GPS_DATA_SUCCESS:
            return {
                ...state,
                userPositionData: action.payload,
                isUserPosition: true
            }
        case UserActionTypes.FETCH_USER_GPS_DATA_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default: 
            return  {
                ...state,
                isUserPosition: false
            }
    }
};

export default mapdataReducer;