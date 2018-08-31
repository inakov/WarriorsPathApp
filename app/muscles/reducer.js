// @flow
"use strict";

import type { State } from "./model";
import { defaultMuscleGroups } from "./constants";
import { createReducer, extractAllIds, mapById } from "../common/utils";

const initialState: State = {
    byId: mapById(defaultMuscleGroups),
    allIds: extractAllIds(defaultMuscleGroups),
};

export default createReducer(initialState, {});
