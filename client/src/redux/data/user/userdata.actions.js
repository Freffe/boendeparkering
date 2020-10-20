import UserActionTypes from './userdata.types';

// Saga for this, fetching is async. 
export const userDataFetchStart = () => ({
    type: UserActionTypes.FETCH_USER_GPS_DATA_START
});


export const userDataFetchSuccess = (data) => ({
    type: UserActionTypes.FETCH_USER_GPS_DATA_SUCCESS,
    payload: data
});

export const userDataFetchFailure = (error) => ({
    type: UserActionTypes.FETCH_USER_GPS_DATA_FAILURE,
    payload: error
});
