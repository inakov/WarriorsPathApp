// @flow
"use strict";

import { createSelector } from "reselect";

export const getById = (state) => state.muscles.byId;

export const getAllIds = (state) => state.muscles.allIds;

export const getAll = createSelector(
    [ getById, getAllIds ],
    (byId, allIds) => {
        return allIds.map(id => byId[id]);
    }
);
