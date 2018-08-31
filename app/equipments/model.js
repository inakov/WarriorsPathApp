// @flow
"use strict";

export type Equipment = {
    id?: string,
    title: string,
};

export type State = {
    byId: [id: number]: Equipment,
    allIds: number[],
};
