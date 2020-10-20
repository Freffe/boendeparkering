import { createSelector } from 'reselect';

export const selectUserData = state => state.userPositionData;

export const selectMapItems = createSelector(
    [selectUserData],
    (userPositionData) => userPositionData.userPositionData
);