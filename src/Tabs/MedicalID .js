
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Icon} from 'native-base';

export default class MedicalID extends Component{
  static navigationOptions={
    tabBarLabel:'Medical ID',
    tabBarIcon:({tintColor})=>{
        return <Icon name="person" style={{color:tintColor}}/>
    }
}
  render() {
    return (
      <View>
        <Text>Welcome to Medical ID!</Text>
      </View>
    );
  }
}

