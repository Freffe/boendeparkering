import { createSelector } from 'reselect';

export const selectMapData = state => state.mapData;

export const selectMapItems = createSelector(
    [selectMapData],
    (mapData) => mapData.mapData
);