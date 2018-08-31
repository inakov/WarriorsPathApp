'use strict';

import { StackNavigator } from 'react-navigation';
import AddWorkoutScreen from './AddWorkoutScreen';
import WorkoutsContainer  from './container/WorkoutsContainer';
import { stackConfig } from '../../common/navigationConfig';

const routeConfiguration = {
    WorkoutsScreen: {
        screen: WorkoutsContainer,
        navigationOptions: {
            title: 'Workouts',
        },
    },
    AddWorkoutScreen: {
        screen: AddWorkoutScreen,
        navigationOptions: {
            title: 'Add Workout',
        },
    },
};

const stackNavigatorConfiguration = {
    ...stackConfig,
    initialRouteName: 'WorkoutsScreen',
};

export const WorkoutsNavigator = StackNavigator(routeConfiguration, stackNavigatorConfiguration);
