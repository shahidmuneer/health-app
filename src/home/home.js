import React, { Component } from 'react';
import { Text, View, Button, Image } from 'react-native';
import { createAppContainer, TabNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HealthData from '../Tabs/HealthData';
import MedicalID from '../Tabs/MedicalID ';
import Sources from '../Tabs/Sources';
import Today from '../Tabs/Today';


var MainScreen = createBottomTabNavigator({

  Today: { screen: Today },
  HealthData: { screen: HealthData },
  Sources: { screen: Sources },
  MedicalID: { screen: MedicalID },
},{
  
  swipeEnabled:true,
  tabBarPosition:'bottom',
  tabBarOptions:{
    activeTintColor:'red',
    inactiveBackgroundColor:'#dadce3',
    activeBackgroundColor:'#dadce3',
    inactiveTintColor:'black',
    labelStyle:{
      fontSize:11,
      padding:2
    }
  }


}

);
MainScreen.navigationOptions = {
  title: "Tab example"
};
const App = createAppContainer(MainScreen);
export default App;