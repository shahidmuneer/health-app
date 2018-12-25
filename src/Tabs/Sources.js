
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Icon} from 'native-base';

export default class Sources extends Component{
  static navigationOptions={
    tabBarLabel:'Sources',
    tabBarIcon:({tintColor})=>{
        return <Icon name="heart" style={{color:tintColor}}/>
    }
}
  render() {
    return (
      <View>
        <Text>Welcome to Sources!</Text>
      </View>
    );
  }
}

