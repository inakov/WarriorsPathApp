import Colors from "./Colors";

export const stackConfig = {
    initialRouteName: 'ExercisesScreen',
    navigationOptions: {
        headerStyle: {
            backgroundColor: Colors.header.backgroundColor,
            borderBottomWidth: 0.5,
            borderBottomColor: Colors.header.borderBottomColor
        },
        headerTintColor: Colors.header.tintColor,
        headerTitleStyle: {
            color: Colors.header.titleColor
        },
    },
    cardStyle: {
        backgroundColor: Colors.darkBackground,
        shadowColor: Colors.matterhorn,
        shadowRadius: 3,
    }
};

export const tabConfig = {
    tabBarOptions: {
        activeTintColor: Colors.tabBar.activeTintColor,
        inactiveTintColor: Colors.tabBar.inactiveTintColor,
        style: {
            backgroundColor: Colors.tabBar.backgroundColor,
            borderTopWidth: 0.5,
            borderTopColor: Colors.header.borderBottomColor
        },
    },
    animationEnabled: false,
    swipeEnabled: false,
};