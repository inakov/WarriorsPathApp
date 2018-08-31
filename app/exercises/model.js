// @flow
"use strict";

export type Exercise = {
    id: string,
    name?: string,
    muscleGroupId: string,
    equipmentId: string,
    typeId: string,
};

export type ExerciseType = {
    id: string,
    title: string,
}

export type State = {
    nextId: number,
    byId: [id: string]: Exercise,
    allIds: string[],
    currentExercise: Exercise,
    types: ExerciseType[],
};
