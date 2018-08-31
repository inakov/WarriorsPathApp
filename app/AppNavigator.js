"use strict";

import React from "react";
import { TabNavigator } from "react-navigation";
import { ExercisesNavigator } from "./exercises/screens/navigationConfiguration";
import { WorkoutsNavigator } from "./screens/workouts/navigationConfiguration";
import { MealsNavigator } from "./screens/meals/navigationConfiguration";
import { HistoryNavigator } from "./screens/history/navigationConfiguration"
import { tabConfig } from "./common/navigationConfig";
import Icon from "./common/components/icons/Icon";


const routeConfiguration = {
    Workouts: {
        screen: WorkoutsNavigator,
        navigationOptions: {
            tabBarLabel: "Workouts",
            tabBarIcon: ({ tintColor }) => <Icon size={ 26 } name={ "sword-cross" } color={ tintColor }/>
        },
    },
    Exercises: {
        screen: ExercisesNavigator,
        navigationOptions: {
            tabBarLabel: "Exercises",
            tabBarIcon: ({ tintColor }) => <Icon size={ 26 } name={ "dumbbell" } color={ tintColor }/>
        },
    },
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarLabel: "Meals",
            tabBarIcon: ({ tintColor }) => <Icon size={ 26 } name={ "food-variant" } color={ tintColor }/>
        },
    },
    History: {
        screen: HistoryNavigator,
        navigationOptions: {
            tabBarLabel: "History",
            tabBarIcon: ({ tintColor }) => <Icon size={ 26 } name={ "chart-areaspline" } color={ tintColor }/>
        },
    },
};

const tabNavigatorConfig = {
    ...tabConfig,
};

export const AppNavigator = TabNavigator(routeConfiguration, tabNavigatorConfig);
