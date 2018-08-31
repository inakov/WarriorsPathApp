'use strict';

import { StackNavigator } from 'react-navigation'
import { HistoryContainer } from "./container/HistoryContainer";
import { stackConfig } from "../../common/navigationConfig";

const routeConfiguration = {
    HistoryScreen: {
        screen: HistoryContainer,
        navigationOptions: {
            title: 'History',
        },
    }
};

const stackNavigatorConfiguration = {
    ...stackConfig,
    initialRouteName: 'HistoryScreen',
};

export const HistoryNavigator = StackNavigator(routeConfiguration, stackNavigatorConfiguration);
