import axios from 'axios';
import { takeLatest, put, all, call } from 'redux-saga/effects';

import DataActionTypes from './mapdata.types';
import { mapDataFetchSuccess, mapDataFetchFailure, mapDataFetchEmpty } from './mapdata.actions';

export function* mapDataFetch({ payload: { adress } }) {
    try {
        const mapData = yield axios.post("/fetchAdressData", {
            data: adress 
        });
        yield put(mapDataFetchSuccess(mapData));
        if (mapData.data.length === 0) {
            yield put(mapDataFetchEmpty());
        }
    } catch (error) {
        yield put(mapDataFetchFailure(error));
    }
}

export function* onMapDataFetchStart() {
    yield takeLatest(DataActionTypes.FETCH_MAP_DATA_START, mapDataFetch);
}

export function* mapSagas() {
    yield all([call(onMapDataFetchStart)]);
}
