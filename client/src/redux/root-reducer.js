import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import mapdataReducer from './data/mapdata.reducer';
import userDataReducer from './data/user/userdata.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['mapData']
};

const rootReducer = combineReducers({
    mapData: mapdataReducer,
    userPositionData: userDataReducer
});
// Gives local storage through the redux-persist package. 
// We only want the mapData object to persist for now, as detailed in the persistConfig.
export default persistReducer(persistConfig, rootReducer);