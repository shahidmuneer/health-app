/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import { Header, Left, Tab, Tabs, TabHeading,DatePicker, Body, Right, Button, Icon, Title } from 'native-base';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import GraphTab from './graphwraper';
import Moment from 'moment';
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',

  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});

export default class Mapnative extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedLocation: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      },
      locationChosen: false,
      date: '',
      time: '20:00',
      datetime: '2016-05-05 20:00',
      }
    }
  picklocation = event => {
    const coords = event.nativeEvent.coordinate;
    this.map.animateToRegion({
      ...this.state.focusedLocation,
      latitude: coords.latitude,
      longitude: coords.longitude
    })
    this.setState(prevState => {
      return {
        focusedLocation: {
          ...prevState.focusedLocation,
          latitude: coords.latitude,
          longitude: coords.longitude
        },
        locationChosen: true
      };
    });
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    let marker = null;
    if (this.state.locationChosen) {
      marker = <MapView.Marker coordinate={this.state.focusedLocation} />
    }
    return (
      <View style={{ flex: 1 }}>
        <Header style={{ backgroundColor: 'white' }}>
          <Left>
            <Button transparent>
              <Icon name='ios-arrow-back' style={{ color: 'black' }} />

            </Button>
          </Left>
          <Body>
            <Title style={{ color: 'black' }}>Running</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>Share</Text>
            </Button>
            <Button transparent>
              <Text style={{ color: 'black', marginLeft: 10, fontWeight: 'bold', fontSize: 16 }}>Done</Text>
            </Button>
          </Right>
        </Header>
      
          <View style={{ height: 150, width: '100%' }}>
            <View style={styles.container}>
              <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                initialRegio n={this.state.focusedLocation}
                region={this.state.focusedLocation}
                onPress={this.picklocation}
                ref={ref => this.map = ref}
              >
                {marker}
              </MapView>
            </View>
          </View>
          <View style={{ height: 150 }}>
          <View style={{ flexDirection: 'row',marginTop:15 }}>
                <Text style={{ marginLeft: 65 ,fontSize:15}}>{Moment().format('llll')}</Text>
                <Text>-<Text>{Moment().format('LT')}</Text></Text>
               </View>
               <View style={{marginTop:5,flexDirection:'row'}}>
                    <Text style={{ marginLeft: 45,fontSize:60 }}> 53</Text>
                    <Text style={{ fontSize:20,marginTop:40,marginLeft:5 }}>mins</Text>
                    <Text style={{fontSize:60 }}>12</Text>
                    <Text style={{ fontSize:20,marginTop:40,marginLeft:5 }}>secs</Text> 
                </View>
                    <View style={{marginTop:0,flexDirection:'row'}}>
                    <Text style={{ marginLeft: 100,fontSize:20 }}> 5.38 <Text>km</Text></Text>
                   <Text style={{fontSize:20,color:'#cececd'}}> | </Text>
                    <Text style={{fontSize:20 }}>09'46" <Text>/km</Text></Text>
                </View>
            
          </View>
          <View style={{ height: 280 }}>
            <Text style={{ marginLeft:20 }}>CHART
            <Text style={{ textDecorationLine: 'underline',marginLeft:20}}>                                                                       </Text></Text>
            <View style={{flexDirection:'row',width:'100%',justifyContent:'center', height:80}}>
              <View style={{ justifyContent:'center',alignItems:'center', height: 80, width: 100 }}>

                <Icon name="md-speedometer"  style={{color:'#40dbdb'}}/>
                <Text  style={{color:'#40dbdb'}}>Speed</Text>
              </View>
              <View style={{ justifyContent:'center',alignItems:'center', height: 80, width: 100 }}>

                <Icon name="md-heart" style={{color:'red'}}/>
                <Text style={{color:'red'}}>Heart Rate</Text>
              </View>
              <View style={{ height: 80, justifyContent:'center',alignItems:'center',width: 100 }}>

                <Icon name="md-git-branch" style={{color:'#cececd'}} />
                <Text style={{color:'#cececd'}}>Cadence</Text>
              </View>
            </View>
            <View style={{ marginTop: 10, height: 150 }}>
              <GraphTab />
            </View>

          </View>
      </View>
    );
  }
}
