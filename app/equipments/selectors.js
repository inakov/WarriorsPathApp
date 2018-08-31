//@flow
"use strict";

import { createSelector } from "reselect";

export const getById = (state) => state.equipments.byId;

export const getAllIds = (state) => state.equipments.allIds;

export const getAll = createSelector(
    [ getById, getAllIds ],
    (byId, allIds) => {
        return allIds.map(id => byId[id]);
    }
);
