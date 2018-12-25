/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator,createAppContainer ,StackNavigator} from 'react-navigation';
import Main from './src/Screens/Main';

var Navigator=createStackNavigator({
  Main:{
    screen:Main
  },
});
const App =createAppContainer(Navigator);
export default App;