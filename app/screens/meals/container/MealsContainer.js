'use strict';

import React from 'react';
import { Button, View, Text } from 'react-native';
import Colors from "../../../common/Colors";

export class MealsContainer extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: Colors.lightText}}>Meals Screen</Text>
                <Button
                    color={Colors.primaryText}
                    title="Coming soon, be patient!"
                    onPress={()=>{this.props.navigation.navigate('Details')}}
                />
            </View>
        );
    }
}