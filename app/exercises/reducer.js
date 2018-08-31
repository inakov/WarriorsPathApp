// @flow
"use strict";

import * as actionTypes from "./actionTypes";
import type { State } from "./model";
import { defaultExercises, emptyExercise, defaultExerciseTypes } from "./constants";
import { createReducer, extractAllIds, mapById } from "../common/utils";

const initialState: State = {
    nextId: 12,
    currentExercise: emptyExercise,
    byId: mapById(defaultExercises),
    allIds: extractAllIds(defaultExercises),
    types: defaultExerciseTypes,
};

function changeExerciseName(state, action) {
    return {
        ...state,
        currentExercise: {
            ...state.currentExercise,
            name: action.name,
        },
    };
}

function changeExerciseMuscleGroup(state, action) {
    return {
        ...state,
        currentExercise: {
            ...state.currentExercise,
            muscleGroupId: action.muscleGroupId,
        }
    };
}

function changeExerciseEquipment(state, action) {
    return {
        ...state,
        currentExercise: {
            ...state.currentExercise,
            equipmentId: action.equipmentId,
        }
    };
}

function changeExerciseType(state, action) {
    return {
        ...state,
        currentExercise: {
            ...state.currentExercise,
            typeId: action.typeId,
        }
    };
}

function addExercise(state, action) {
    return {
        ...state,
        allIds: [...state.allIds, state.nextId],
        byId: {
            ...state.byId,
            [state.nextId]: {
                ...state.currentExercise,
                id: state.nextId
            }
        },
        nextId: state.nextId + 1,
        currentExercise: emptyExercise,
    };
}

function clearCurrentExercise(state, action) {
    return {
        ...state,
        currentExercise: emptyExercise,
    }
}

export default createReducer(initialState, {
    [actionTypes.ADD]: addExercise,
    [actionTypes.CLEAR_CURRENT]: clearCurrentExercise,
    [actionTypes.CHANGE_NAME]: changeExerciseName,
    [actionTypes.CHANGE_MUSCLE_GROUP]: changeExerciseMuscleGroup,
    [actionTypes.CHANGE_EQUIPMENT]: changeExerciseEquipment,
    [actionTypes.CHANGE_TYPE]: changeExerciseType
});