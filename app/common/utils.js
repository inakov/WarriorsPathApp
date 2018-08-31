'use strict';

export function updateObject(oldObject, newValues) {
    return Object.assign({}, oldObject, newValues);
}

export function updateItemInArray(items, itemId, updateCallback) {
    const updatedItems = items.map(item => {
        if (item.id === itemId) {
            return updateCallback(item);
        }

        return item;
    });

    return updatedItems;
}

export function createReducer(initialState, actionHandlers) {
    return function reducer(state = initialState, action) {
        if (actionHandlers.hasOwnProperty(action.type)) {
            return actionHandlers[action.type](state, action)
        }

        return state;
    }
}

export const mapById = (items) =>
    items.reduce((byId, item) => {
        byId[item.id] = item;
        return byId
    }, {});

export const extractAllIds = (itmes) => itmes.map(item => item.id);