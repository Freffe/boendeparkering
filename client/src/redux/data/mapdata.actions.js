import DataActionTypes from './mapdata.types';

// Saga for this, fetching is async. 
export const mapDataFetchStart = (adress) => ({
    type: DataActionTypes.FETCH_MAP_DATA_START,
    payload: adress
});


export const mapDataFetchSuccess = (data) => ({
    type: DataActionTypes.FETCH_MAP_DATA_SUCCESS,
    payload: data
});

export const mapDataFetchFailure = (error) => ({
    type: DataActionTypes.FETCH_MAP_DATA_FAILURE,
    payload: error
});

export const mapDataFetchEmpty = () => ({
    type: DataActionTypes.FETCH_MAP_DATA_EMPTY
});

