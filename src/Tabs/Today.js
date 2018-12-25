
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Icon} from 'native-base';

export default class Today extends Component{
  static navigationOptions={
    tabBarLabel:'Today',
    tabBarIcon:({tintColor})=>{
        return <Icon name="ios-clipboard-outline" style={{color:tintColor}}/>
    }
}
  
  render() {
    return (
      <View>
        <Text>Welcome to Today!</Text>
      </View>
    );
  }
}

