import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, Left, Content, ListItem, Footer, FooterTab,
     Switch, Right, Button, Body, Item, Input, TabHeading, Icon, Text } from 'native-base';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
export default class home1 extends Component {
   static navigationOptions={
       tabBarLabel:'Health Data',
       tabBarIcon:({tintColor})=>{
           return <Icon name="apps" style={{color:tintColor}}/>
       }
   }
    
    render() {
        return (
            <View style={{ flex: 1 }} >
                <View style={{ height: 120, backgroundColor: '#c7c1ff', width: '100%', borderBottomWidth: 2 }} >
                    <Container>
                        <Icon name="ios-contact" style={{ marginLeft: '90%', marginTop: '2%', color: 'red' }} />
                        <Text style={{ fontSize: 30, marginLeft: 9, fontWeight: 'bold' }} >Health Data</Text>
                        <Item style={{
                            backgroundColor: '#dadce3', padding: 5, margin: 5, marginLeft: 10,
                            borderRadius: 10, height: 30, width: '93%'
                        }} >
                            <Icon name="ios-search" />
                            <Input placeholder="Search" />

                        </Item>
                    </Container>
                </View>
                <View style={{height:'78.5%',  width: '100%' }}>
                    <ScrollView>

                        <View style={{ height: 150, width: '100%', flexDirection: 'row', }} >
                            <View style={{ backgroundColor: 'red', height: '95%', borderRadius: 15, marginLeft: '4%', marginTop: 5, width: '45%' }}>
                            </View>
                            <View style={{ backgroundColor: 'blue', height: '95%', marginLeft: '2%', marginTop: 5, borderRadius: 15, width: '45%' }} >
                            </View>
                        </View>
                        <View style={{ height: 150, width: '100%', flexDirection: 'row', }} >
                            <View style={{ backgroundColor: 'red', height: '90%', borderRadius: 15, marginLeft: '4%', marginTop: 5, width: '45%' }}>
                            </View>
                            <View style={{ backgroundColor: 'blue', height: '90%', marginLeft: '2%', marginTop: 5, borderRadius: 15, width: '45%' }} >
                            </View>
                        </View>
                        <View>
                            <Content>
                                <ListItem icon>
                                    <Left>
                                        <Button transparent  >
                                            <Icon active name="ios-body" style={{ color: "#ffb90f" }} />
                                        </Button>
                                    </Left>
                                    <Body>
                                        <Text>Body Measurements</Text>
                                    </Body>
                                    <Right>

                                        <Icon active name="ios-arrow-forward-outline" />
                                    </Right>
                                </ListItem>
                                <ListItem icon>
                                    <Left>
                                        <Button transparent >
                                            <Icon active name="ios-clipboard-outline" />
                                        </Button>
                                    </Left>
                                    <Body>
                                        <Text>Health Records</Text>
                                    </Body>
                                    <Right>

                                        <Icon active name="ios-arrow-forward-outline" />
                                    </Right>
                                </ListItem>
                            </Content>
                        </View>
                    </ScrollView>

                </View>
             
            </View>
        );
    }
}
