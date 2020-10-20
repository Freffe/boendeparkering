import { all, call } from 'redux-saga/effects';

import { mapSagas } from './data/mapdata.sagas';
import { userSagas } from './data/user/userdata.sagas';

// Using the all effect we allow sagas to run on separate task streams concurrently
export default function* rootSaga() {
    yield all([
        call(mapSagas),
        call(userSagas)
    ]);
}