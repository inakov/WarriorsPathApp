import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './app/rootReducer';
import WarriorsPathApp from './app/WarriorsPathApp'
import Colors from './app/common/Colors';


const store = createStore(reducers, applyMiddleware(thunk));

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <StatusBar
                    hidden={false}
                    translucent={true}
                    backgroundColor='rgba(0, 0, 0, 0)'
                    barStyle='light-content'
                />
                <WarriorsPathApp />
            </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor
  }
});
