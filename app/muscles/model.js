// @flow
"use strict";

export type MuscleGroup = {
    id?: string,
    title: string,
};

export type State = {
    byId: [id: string] : MuscleGroup,
    allIds: string[],
};

