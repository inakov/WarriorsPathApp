// @flow
"use strict";

import { createSelector } from "reselect";

export const getById = (state) => state.exercises.byId;

export const getAllIds = (state) => state.exercises.allIds;

export const getTypes = (state) => state.exercises.types;

export const getAll = createSelector(
    [ getById, getAllIds ],
    (byId, allIds) => {
        return allIds.map(id => byId[id]);
    }
);