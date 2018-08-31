"use strict";

import { combineReducers } from 'redux';
import exercises from './exercises';
import muscles from './muscles';
import equipments from './equipments';

export default combineReducers({
    equipments: equipments.reducer,
    muscles: muscles.reducer,
    exercises: exercises.reducer,
});