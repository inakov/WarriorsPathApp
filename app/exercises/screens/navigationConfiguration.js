"use strict";

import { StackNavigator } from "react-navigation"
import ExerciseListScreen from "./ExerciseListScreen";
import AddExerciseScreen from "./AddExerciseScreen";
import PickMuscleGroupScreen from "./PickMuscleGroupScreen";
import PickEquipmentScreen from "./PickEquipmentScreen";
import PickExercisesTypeScreen from "./PickExercisesTypeScreen";
import { stackConfig } from "../../common/navigationConfig";

const routeConfiguration = {
    ExerciseListScreen: {
        screen: ExerciseListScreen,
        navigationOptions: {
            title: "Exercises",
        },
    },
    AddExerciseScreen: {
        screen: AddExerciseScreen,
        navigationOptions: {
            title: "Add Exercise",
        },
    },
    PickMuscleGroupScreen: {
        screen: PickMuscleGroupScreen,
        navigationOptions: {
            title: "Select Muscle Group",
        },
    },
    PickEquipmentScreen: {
        screen: PickEquipmentScreen,
        navigationOptions: {
            title: "Select Equipment",
        },
    },
    PickExercisesTypeScreen: {
        screen: PickExercisesTypeScreen,
        navigationOptions: {
            title: "Select Exercises Type",
        },
    },
};

const stackNavigatorConfiguration = {
    ...stackConfig,
    initialRouteName: "ExerciseListScreen",
};

export const ExercisesNavigator = StackNavigator(routeConfiguration, stackNavigatorConfiguration);
