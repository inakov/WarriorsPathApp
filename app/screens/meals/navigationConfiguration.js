'use strict';

import { StackNavigator } from 'react-navigation'
import { MealsContainer } from "./container/MealsContainer";
import { stackConfig } from "../../common/navigationConfig";

const routeConfiguration = {
    MealsScreen: {
        screen: MealsContainer,
        navigationOptions: {
            title: 'Meals',
        },
    },
};

const stackNavigatorConfiguration = {
    ...stackConfig,
    initialRouteName: 'MealsScreen',
};

export const MealsNavigator = StackNavigator(routeConfiguration, stackNavigatorConfiguration);
