import DataActionTypes from './mapdata.types';

const INITIAL_STATE = {
    mapData: [],
    isEmpty: false,
    error: null
}

const mapdataReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case DataActionTypes.FETCH_MAP_DATA_SUCCESS:
            return {
                ...state,
                mapData: action.payload,
                isEmpty: false
            }
        case DataActionTypes.FETCH_MAP_DATA_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case DataActionTypes.FETCH_MAP_DATA_EMPTY:
            return {
                ...state,
                isEmpty: !state.isEmpty
            }
        default:
            return state;
    }
};

export default mapdataReducer;