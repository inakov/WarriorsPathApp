"use strict";

export const defaultExercises = [
    {
        id: "1",
        name: "Barbell Bench Press",
        muscleGroupId: "CHEST",
        equipmentId: "BARBELL",
        typeId: "NONE",
    },
    {
        id: "2",
        name: "Dumbbell Bench Press",
        muscleGroupId: "NONE",
        equipmentId: "NONE",
        typeId: "NONE",
    },
    {
        id: "3",
        name: "Military Press",
        muscleGroupId: "NONE",
        equipmentId: "NONE",
        typeId: "NONE",
    },
    {
        id: "4",
        name: "Dumbbell Flys",
        muscleGroupId: "NONE",
        equipmentId: "NONE",
        typeId: "NONE",
    },
    {
        id: "5",
        name: "T-Bar Row",
        muscleGroupId: "NONE",
        equipmentId: "NONE",
        typeId: "NONE",
    },
    {
        id: "6",
        name: "Weighted Chin-Ups",
        muscleGroupId: "NONE",
        equipmentId: "NONE",
        typeId: "NONE",
    },
    {
        id: "7",
        name: "Barbell Back Squat",
        muscleGroupId: "NONE",
        equipmentId: "NONE",
        typeId: "NONE",
    },
    {
        id: "8",
        name: "Leg press",
        muscleGroupId: "NONE",
        equipmentId: "NONE",
        typeId: "NONE",
    },
    {
        id: "9",
        name: "Straight-Bar Curl",
        muscleGroupId: "NONE",
        equipmentId: "NONE",
        typeId: "NONE",
    },
    {
        id: "10",
        name: "Seated Triceps Press",
        muscleGroupId: "NONE",
        equipmentId: "NONE",
        typeId: "NONE",
    },
    {
        id: "11",
        name: "Weighted Dips",
        muscleGroupId: "NONE",
        equipmentId: "NONE",
        typeId: "NONE",
    },
];

export const defaultExerciseTypes = [
    {id: "NONE", title: "None"},
    {id: "WEIGHTLIFTING", title: "Weightlifting"},
    {id: "CARDIO", title: "Cardio"},
];

export const emptyExercise = {
    name: "",
    muscleGroupId: "NONE",
    equipmentId: "NONE",
    typeId: "NONE",
};
