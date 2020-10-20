import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './userdata.types';
import { userDataFetchSuccess, userDataFetchFailure } from './userdata.actions';

function error(rej, err) {
    console.log("Error getting position: ", err);
    return rej;
}

function getPosition() {
    
    const options = {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0
      };

    return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, (err) => error(rej, err), options);
    });
}

export function* userDataFetch() {
    try {
        const userGpsData = yield getPosition();
        yield navigator.geolocation.clearWatch(userGpsData);
        //yield console.log("gps: ", userGpsData);
        yield put(userDataFetchSuccess([userGpsData.coords.latitude, userGpsData.coords.longitude]));
    } catch (error) {
        yield put(userDataFetchFailure(error));
    }
}

export function* onUserDataFetchStart() {
    yield takeLatest(UserActionTypes.FETCH_USER_GPS_DATA_START, userDataFetch);
}

export function* userSagas() {
    yield all([call(onUserDataFetchStart)]);
}