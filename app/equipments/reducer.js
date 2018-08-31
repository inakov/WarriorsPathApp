// @flow
"use strict";

import { defaultEquipments } from "./constants";
import { createReducer, extractAllIds, mapById } from "../common/utils";

const initialState: State = {
    byId: mapById(defaultEquipments),
    allIds: extractAllIds(defaultEquipments),
};

export default createReducer(initialState, {});
