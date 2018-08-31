"use strict";

import * as actionTypes from "./actionTypes";

export const add = () => ({
    type: actionTypes.ADD,
});

export const clearCurrent = () => ({
    type: actionTypes.CLEAR_CURRENT,
});

export const changeName = (name) => ({
    type: actionTypes.CHANGE_NAME,
    name: name,
});

export const changeMuscleGroup = (muscleGroupId) => ({
    type: actionTypes.CHANGE_MUSCLE_GROUP,
    muscleGroupId: muscleGroupId,
});

export const changeType = (typeId) => ({
    type: actionTypes.CHANGE_TYPE,
    typeId: typeId,
});

export const changeEquipment = (equipmentId) => ({
    type: actionTypes.CHANGE_EQUIPMENT,
    equipmentId: equipmentId,
});

